# Formatters

You can provide a pattern for formatting dates, credit cards, etc. To do this you can either provide a `"Formatter String"` or a `"Formatter Array"` where regular expression are used as a placeholder for the user input.

As simple credit card pattern could be:

```js
const mask = '####-####-####-####';
```

<br />

Or

```js
const formatter = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/ '-', /\d/, /\d/, /\d/, /\d/];
```

<br />

Formatter strings syntax

| Character | RegEx  | Example Formatter String | Derived Formatter Array                               |
| --------- | ------ | ------------------------ | ----------------------------------------------------- |
| #         | /\d/   | ###-###                  | [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]             |
| \*        | /[\w]/ | \*\*_-_\*\*              | [/[\w]/, /[\w]/, /[\w]/, '-', /[\w]/, /[\w]/, /[\w]/] |

#### Below is an example with a formatter and parser using formatter strings

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

const formatter = '+1 ###-###-####';

const parser = value => {
  return value.replace('+1 ', '').replace(/-/g, '');
};

<Form>
  <label>
    <Input
      name="phone"
      label="Phone Number:"
      formatter={formatter}
      parser={parser}
      initialValue="1231231234"
    />
    <Input
      name="maskedField"
      label="Word Formatting"
      formatter="$***-**(**)***"
      initialValue="HelloWorld"
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
