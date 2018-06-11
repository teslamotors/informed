# Intro

Informed comes with some basic default inputs. All inputs are built utilizing the `asField` HOC, and therefore have access to all the properties of an informed's field. This design allows you to define your very own Input types if the defaults don't suite your needs! For additional information on custom Inputs, see the custom input section. If you are just getting started, or don't care to create your own custom inputs, simply take a look at the included input types.

## Input Props

Below are all the input props that `informed`'s inputs accept.

| Name           | Type          | Required | Description                     |
|----------------|---------------|----------|---------------------------------|
| field          | string        |   YES    | Every input must have a field. This is how the form manages the state of this input. See the field syntax section below for additional details on what you can pass in for field.
| initialValue   | string OR num |   NO     | An initial value for that field.
| validate       | func          |   NO     | Function that gets called when form performs validation. Function accepts the value as a parameter and must return either an error string or null. By default it only gets called onSubmit. See Validation section for additional details.
| validateOnBlur | bool          |   NO     | Tells field to perform validation onBlur. By default it only validates onSubmit.
| validateOnChange | bool        |   NO     | Tells field to perform validation onChange. By default it only validates onSubmit.
| `<input>` props | html-5       |   NO     | All inputs can accept any props that a native html input, select, textarea, etc. can accept. For example, if you want to disable a text input, you would simply pass `disabled`.

## Field Syntax

Every input in `informed` needs an associated field name. In its simplest form, field names are just strings. However, sometimes you may have some complex forms that require special ways of organizing your fields, this is where the special syntax comes in.

Fields can be simple strings, strings that contain ".", and strings that contain "[ ]", much like how you access and write to objects and arrays in javascript. Below are some examples of field names and what they resolve to in the forms values object.

| Field                  | Resolution                       |
|------------------------|----------------------------------|
| `"username"`           | `values.username`                |
| `"friends[0]"`         | `values.friends[0]`              |
| `"friends['0']"`       | `values.friends.0`               |

<!-- STORY -->
