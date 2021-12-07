# Mask With Cursor Offset

Masking values and offseting the cursor is made simple with the use of the `maskWithCursorOffset` function. Please NOTE!
the use of the `maintainCursor` prop. This is not always necessary, but in the following
example was needed! If you remove it the cursor will jump to the end every time the user types.

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

/**
 * Goal: Mask the input depending on where the user is typing
 *
 * M M / D D / Y Y Y Y
 */
const mask = value => {
  if (value == null) return { offset: 0, value };

  // Take the current value and blow it into sections
  // M M / D D / Y Y Y Y ------> [ M M, /, D D, /, Y Y Y Y ]
  // M / D D / Y Y Y Y   ------> [ M, /, D D, /, Y Y Y Y ]
  // M                   ------> [ M ]
  // M M                 ------> [ M M ]
  // / D D / Y Y Y Y     ------> [ /, D D, /, Y Y Y Y ]
  const sections = value.replace(/[^0-9/]/g, '').split(/(\/)/);

  // Fill in sections
  let offset = 0;
  let v = `${sections[0].slice(0, 2)}`;

  // Add slash after first section if it needs to be added
  if (sections[0].length == 2 && sections[1] != '/') {
    v = `${v}/`;
    offset += 1;
  }

  // Add next section
  if (sections[1]) v = `${v}${sections[1]}`;

  // Add next section
  if (sections[2]) v = `${v}${sections[2].slice(0, 2)}`;

  // Add slash after third section if it needs to be added
  if (sections[2] && sections[2].length == 2 && sections[3] != '/') {
    v = `${v}/`;
    offset += 1;
  }

  // Add next section
  if (sections[3]) v = `${v}${sections[3]}`;

  // Add next section
  if (sections[4]) v = `${v}${sections[4]}`;

  return { value: v, offset };
};

<Form>
  <label>
    Date:
    <Input
      field="date"
      maxLength="10"
      maskWithCursorOffset={mask}
      maintainCursor
    />
  </label>
  <button type="submit">Submit</button>
</Form>;
```
