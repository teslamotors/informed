# Intro

Informed comes with some basic default inputs. All inputs are built utilizing the `asField` HOC, and therefore have access to all the properties of an informed's field. This design allows you to define your very own Input types if the defaults don't suite your needs! For additional information on custom Inputs, see the custom input section. If you are just getting started, or don't care to create your own custom inputs, simply take a look at the included input types.

## Input Props

Below are all the input props that `informed`'s inputs accept.

| Name                | Type          | Required | Description                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| field               | string        | YES      | Every input must have a field. This is how the form manages the state of this input. See the field syntax section below for additional details on what you can pass in for field.                                                                                                                                                                  |
| initialValue        | string OR num | NO       | An initial value for that field.                                                                                                                                                                                                                                                                                                                   |
| validate            | func          | NO       | Function that gets called when form performs validation. Function accepts the value as a parameter and must return either an error string or null. By default it only gets called onSubmit. See Validation section for additional details.                                                                                                         |
| validateOnBlur      | bool          | NO       | Tells field to perform validation onBlur. By default it only validates onSubmit.                                                                                                                                                                                                                                                                   |
| validateOnChange    | bool          | NO       | Tells field to perform validation onChange. By default it only validates onSubmit.                                                                                                                                                                                                                                                                 |
| validateOnMount     | bool          | NO       | Tells field to perform validation onMount.                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                        |
| mask                | func          | NO       | Function that will mask values when entered. Example `value => value + '!!!'` or `value => value.trim()`         |
| format && parse     | func          | NO       | Functions that will format values when entered. Example format: `value => $ + value` and parse: `value => value.replace('$','')`         |
| maintainCursor      | bool          | NO       | format, parse, and mask functions will sometimes cause the cursor position to get lost. You can optionally pass this prop to maintain it!        |
| onValueChange       | func          | NO       | Function that will get called when this fields value changes. Function takes the new value as a parameter.                                                                                                                                                                                                                                         |
| `<input>` props     | html-5        | NO       | All inputs can accept any props that a native html input, select, textarea, etc. can accept. For example, if you want to disable a text input, you would simply pass `disabled`.                                                                                                                                                                   |

## Field Syntax

Every input in `informed` needs an associated field name. In its simplest form, field names are just strings. However, sometimes you may have some complex forms that require special ways of organizing your fields, this is where the special syntax comes in.

Fields can be simple strings, strings that contain ".", and strings that contain "[ ]", much like how you access and write to objects and arrays in javascript. Below are some examples of field names and what they resolve to in the forms values object.

| Field                  | Resolution               |
| ---------------------- | ------------------------ |
| `"username"`           | `values.username`        |
| `"friends[0]"`         | `values.friends[0]`      |
| `"siblings.1"`         | `values.siblings[1]`     |
| `"siblings['2']"`      | `values.siblings[2]`     |
| `"parents[0].name"`    | `values.parents[0].name` |
| `"parents[1]['name']"` | `values.parents[1].name` |

<!-- STORY -->

```jsx
import { Form, Text } from 'informed';

<Form id="syntax-form">
  <label htmlFor="syntax-username">Username:</label>
  <Text field="username" id="syntax-username" />
  <label htmlFor="syntax-friends[0]">Friend[0]:</label>
  <Text field="friends[0]" id="syntax-friends[0]" />
  <label htmlFor="syntax-siblings.1">Siblings.1:</label>
  <Text field="siblings.1" id="syntax-siblings.1" />
  <label htmlFor="syntax-siblings['2']">Siblings['2']</label>
  <Text field="siblings['2']" id="syntax-siblings['2']" />
  <label htmlFor="syntax-parents[0].name">Parents[0].name:</label>
  <Text field="parents[0].name" id="syntax-parents[0].name" />
  <button type="submit">Submit</button>
</Form>;
```
