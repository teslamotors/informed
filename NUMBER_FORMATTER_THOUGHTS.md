# Number Formatter Thoughts

## Problem Statement: Formatting Numbers as Users Type

When building forms, especially those that accept numeric input (like currency, percentages, or measurements), users expect the input to be formatted in real-time as they type. For example:

- Typing `1234` in a currency field should display as `1,234` or `$1,234.00`.
- Typing `0.25` in a percentage field should display as `25%`.
- Deleting or inserting characters should keep the cursor in a logical position, even as formatting characters (like commas or symbols) are added or removed.

**Challenges:**
- Formatting must be dynamic and responsive to every keystroke.
- The underlying value (for form submission) must remain a valid number, even if the displayed value is formatted.
- The cursor position must be managed so the user experience is smooth and intuitive.
- Internationalization: Different locales use different decimal and grouping separators.

## Informed's Formatter: How It Works

Informed provides a flexible formatting system, allowing fields to specify a "formatter" that transforms the raw value into a formatted string for display, and a "parser" that converts the formatted string back into a raw value for storage.

### The `informedFormatter` Function

This is the core function that applies a formatter to a value. It takes:

- `val`: The current value (as typed by the user).
- `frmtr`: The formatter (can be a string, array, or function).
- `old`: The previous value (for cursor offset calculation).
- `full`: The full value (sometimes needed for context).

#### How It Works

1. **Formatter Normalization:**  
   The formatter is normalized into an array of "mask" elements (strings or regexes) using `getFormatter`. For example, a US phone number formatter might look like:  
   `['+', '1', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]`

2. **Prefix and Suffix Handling:**  
   The function determines which parts of the formatter are static (prefix/suffix) and which are dynamic (user input).

3. **Iterative Formatting:**  
   It iterates through the formatter and the value, matching user input to the mask. If a character matches the mask, it is included; if not, it is skipped or the mask character is inserted.

4. **Cursor Offset Calculation:**  
   The function calculates how much the cursor should move after formatting, so the user's typing experience remains natural.

5. **Special Cases:**  
   Handles cases like deleting a suffix, typing just a decimal separator, or working with React Native.

#### Example

Suppose the formatter is for a US currency: `"$#,###.##"`

- User types: `1234`
- Formatter applies:  
  - Inserts `$` at the start.
  - Adds a comma after the first digit if needed.
  - Ensures two decimal places if required.
- Displayed value: `$1,234`

If the user deletes the `4`, the formatter updates the display to `$123`.

### The `createIntlNumberFormatter` Function: Deep Dive

This function is the magic that bridges JavaScript's `Intl.NumberFormat` with Informed's formatter system. It uses `formatToParts()` to analyze how numbers are formatted and then generates dynamic masks and parsers.

#### How It Works: Step by Step

1. **Setup and Locale Detection:**
   ```javascript
   const numberFormatter = new Intl.NumberFormat(locale, opts);
   let toParts = v => numberFormatter.formatToParts(v);
   ```

2. **Detect Locale-Specific Characters:**
   ```javascript
   // Find decimal separator (e.g., '.' for US, ',' for German)
   const decimalChar = toParts(0.1).find(({ type }) => type === 'decimal')?.value ?? '.';
   
   // Find minus sign (e.g., '-' for US, '(' for accounting format)
   let minusChar = toParts(-1).find(({ type }) => type === 'minusSign')?.value;
   ```

3. **The Mask Function:**
   The `mask` function takes a value and generates a mask array that `informedFormatter` can use. Here's how:

   **Step 1: Analyze the formatted number**
   ```javascript
   const numberParts = toParts(number);
   ```

   **Step 2: Convert parts to mask array**
   ```javascript
   let maskArray = numberParts.reduce((pv, { type, value: partValue }) => {
     if (['integer', 'fraction'].includes(type)) {
       // Convert digits to regex patterns
       return [...pv, ...partValue.split('').map(() => /\d/)];
     }
     if (type === 'currency' || type === 'minusSign') {
       // Keep currency symbols and minus signs as strings
       return [...pv, ...partValue.split('')];
     }
     // Keep other parts (like grouping separators) as strings
     return [...pv, partValue];
   }, []);
   ```

4. **The Parser Function:**
   ```javascript
   const parser = value => {
     const isNegative = `${value}`.includes(minusChar);
     return isNegative ? -toFloat(value, decimalChar) : toFloat(value, decimalChar);
   };
   ```

#### Detailed Examples

**Example 1: US Currency (`en-US`, `{ style: 'currency', currency: 'USD' }`)**

Input: `1234.56`

1. **formatToParts(1234.56) returns:**
   ```javascript
   [
     { type: 'currency', value: '$' },
     { type: 'integer', value: '1' },
     { type: 'group', value: ',' },
     { type: 'integer', value: '234' },
     { type: 'decimal', value: '.' },
     { type: 'fraction', value: '56' }
   ]
   ```

2. **Mask generation:**
   ```javascript
   // Reduce process:
   // PV [] + currency '$' → ['$']
   // PV ['$'] + integer '1' → ['$', /\d/]
   // PV ['$', /\d/] + group ',' → ['$', /\d/, ',']
   // PV ['$', /\d/, ','] + integer '234' → ['$', /\d/, ',', /\d/, /\d/, /\d/]
   // PV ['$', /\d/, ',', /\d/, /\d/, /\d/] + decimal '.' → ['$', /\d/, ',', /\d/, /\d/, /\d/, '.']
   // PV ['$', /\d/, ',', /\d/, /\d/, /\d/, '.'] + fraction '56' → ['$', /\d/, ',', /\d/, /\d/, /\d/, '.', /\d/, /\d/]
   
   Final mask: ['$', /\d/, ',', /\d/, /\d/, /\d/, '.', /\d/, /\d/]
   ```

3. **User types "1234":**
   - Raw input: `1234`
   - Mask applied: `$1,234`
   - Displayed: `$1,234`

4. **User types "1234.5":**
   - Raw input: `1234.5`
   - Mask applied: `$1,234.5`
   - Displayed: `$1,234.5`

**Example 2: German Currency (`de-DE`, `{ style: 'currency', currency: 'EUR' }`)**

Input: `1234.56`

1. **formatToParts(1234.56) returns:**
   ```javascript
   [
     { type: 'currency', value: '€' },
     { type: 'integer', value: '1' },
     { type: 'group', value: '.' },
     { type: 'integer', value: '234' },
     { type: 'decimal', value: ',' },
     { type: 'fraction', value: '56' }
   ]
   ```

2. **Mask generation:**
   ```javascript
   Final mask: ['€', /\d/, '.', /\d/, /\d/, /\d/, ',', /\d/, /\d/]
   ```

3. **User types "1234,56":**
   - Raw input: `1234,56`
   - Mask applied: `€1.234,56`
   - Displayed: `€1.234,56`

**Example 3: Percentage (`en-US`, `{ style: 'percent' }`)**

Input: `0.25`

1. **formatToParts(0.25) returns:**
   ```javascript
   [
     { type: 'integer', value: '25' },
     { type: 'literal', value: '%' }
   ]
   ```

2. **Mask generation:**
   ```javascript
   Final mask: [/\d/, /\d/, '%']
   ```

3. **User types "25":**
   - Raw input: `25`
   - Mask applied: `25%`
   - Displayed: `25%`

#### The Parser in Action

The parser strips formatting and converts back to a number:

```javascript
// US currency example
parser("$1,234.56") → 1234.56

// German currency example  
parser("€1.234,56") → 1234.56

// Percentage example
parser("25%") → 0.25
```

#### Key Insights

1. **Dynamic Mask Generation:** Unlike static masks, this generates masks based on the actual formatted output, ensuring perfect alignment with locale-specific formatting.

2. **Locale Awareness:** The same number formats differently across locales, and this system automatically adapts.

3. **Real-time Adaptation:** As users type, the mask updates to reflect the current value's formatting requirements.

4. **Bidirectional Conversion:** The parser ensures the underlying form value is always a clean number, while the formatter ensures the display is always properly formatted.

## How Number Formatter Makes Use of Informed Formatter

1. **User Types:**  
   The raw value is passed to the field's `onChange` handler.

2. **Formatting:**  
   The field uses `informedFormatter`, passing in the value, the mask generated by `createIntlNumberFormatter`, and the previous value.

3. **Display Update:**  
   The formatted value is shown in the input, with the cursor position adjusted as needed.

4. **Parsing:**  
   When the value is needed for form submission or validation, the parser strips formatting and returns the raw number.

5. **Internationalization:**  
   The formatter and parser adapt to the user's locale, ensuring correct separators and symbols.

## Example Scenarios

### US Currency Input

- User types: `123456`
- Display: `$123,456`
- User deletes `6`:  
  - Display: `$12,345`
  - Cursor remains in the correct position.

### Percentage Input

- User types: `0.25`
- Display: `25%`
- User deletes `5`:  
  - Display: `2%`
  - Underlying value: `0.02`

### Deleting Suffix

- User types: `20%`
- Deletes `%`:  
  - Display: `20`
  - Suffix is re-added automatically.

## Summary

The informed number formatter system is designed to provide a seamless, locale-aware, and user-friendly experience for numeric inputs. It leverages a flexible formatter/parser architecture, real-time mask generation, and careful cursor management to ensure that as users type, their input is always valid, well-formatted, and easy to edit. 