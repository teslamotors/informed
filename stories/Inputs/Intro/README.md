# Intro

Informed comes with some basic default inputs. All inputs are built utilizing the `useField` hook, and therefore have access to all the properties of an informed's field. This design allows you to define your very own Input types if the defaults don't suite your needs! For additional information on custom Inputs, see the custom input section. If you are just getting started, or don't care to create your own custom inputs, simply take a look at the included input types.

## Input Props

Below are all the input props that `informed`'s inputs accept.

| Name                | Type   | Required | Description                                                                                                                                                                                                                              |
| ------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                | string | YES      | Every input must have a name. This is how the form manages the state of this input. See the field syntax section below for additional details on what you can pass in for field.                                                         |
| initialValue        | any    | NO       | An initial value for that field.                                                                                                                                                                                                         |
| defaultValue        | any    | NO       | A default value for that field.                                                                                                                                                                                                          |
| validate            | func   | NO       | Function that gets called when form performs validation. Function accepts the value as a parameter and must return either an error or undefined. By default it only gets called onSubmit. See Validation section for additional details. |
| validateOn          | bool   | NO       | Tells field when to perform validation. By default it only validates onBlur.                                                                                                                                                             |
| validateOnMount     | bool   | NO       | Tells field to perform validation onMount.                                                                                                                                                                                               |  |
| keep                | object | NO       | Keeps specified field state around even when the input itself is unmounted keep={{ value: true }}                                                                                                                                        |
| keepState           | bool   | NO       | Keeps the field state around even when the input itself is unmounted ( see dynamic form docs for example )                                                                                                                               |
| keepStateIfRelevant | bool   | NO       | Keeps the field state around even when the input itself is not mounted ( only if its also relevant )                                                                                                                                     |
| maintainCursor      | bool   | NO       | formatter and parser functions will sometimes cause the cursor position to get lost. By default we informed will maintain cursor position. You can toggle that off here.                                                                 |
| allowEmptyString    | bool   | NO       | Enable empty strings in the input value ( by default when you backspace everything in a text field it will remove the value )                                                                                                            |
| `<input>` props     | html-5 | NO       | All inputs can accept any props that a native html input, select, textarea, etc. can accept. For example, if you want to disable a text input, you would simply pass `disabled`.                                                         |

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
import { Form, Input, Debug } from 'informed';

const Example = () => (
  <Form>
    <Input name="username" label="Username:" />
    <Input name="friends[0]" label="Friend[0]" />
    <Input name="siblings.1" label="Siblings.1" />
    <Input name="siblings['2']" label="Siblings['2']" />
    <Input name="parents[0].name" label="Parents[0].name:" />
    <button type="submit">Submit</button>
    Values:
    <Debug values />
  </Form>
);
```
