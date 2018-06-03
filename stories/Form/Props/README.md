# Form Props

`Informed`s Form element can take many props. Below is table that defines what
props are available and what they do.

| Attribute  | Example          | Initial Value | Derived | Description |
|------------|------------------|---------------|---------|-------------|
| values     | `{name:'Joe'}`   | `{}`          | NO      | Key value pair where key is the form field and value is the value entered or selected.|
| touched    | `{name:true}`    | `{}`          | NO      | Key value pair where key is the form field and value is true or undefined ( touched or untouched ). Submitting form will cause all fields to be touched.|
| errors     |`{name:'Invalid'}`| `{}`          | NO      | Key value pair where key is the form field and value is the error associated with that field. If a validate function is provided to an input, then when it is called this object will be modified.|
| invalid  | `true`             | `false`       | YES     | Boolean that is true when form is invalid. A form is invalid when any of its inputs fails its validation function ( if there are errors )|
