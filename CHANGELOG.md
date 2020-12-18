## 3.27.0 (December 18, 2020)

### Fixed

- bug with update function in form controller where it would pull instead of delete on swap

## 3.26.0 (December 17, 2020)

### Added

- `swap` to array fields

### Rafactored

- Internal state management

## 3.25.0 (December 8, 2020)

### Added

- `onReset` to form props

## 3.24.4 (December 5, 2020)

### Updated

- README and needed to get it to npm ... again again

## 3.24.3 (December 5, 2020)

### Updated

- README and needed to get it to npm ... again

## 3.24.2 (November 24, 2020)

### Updated

- README and needed to get it to npm

## 3.24.1 (November 23, 2020)

### Fixed

- Type issue ( missing allow empty string from props def )

## 3.24.0 (November 19, 2020)

### Fixed

- Issue where Id was not getting passed to default select field

## 3.23.0 (November 18, 2020)

### Removed

- LODASH!!!!! SEE YA LATER NEVER

## 3.22.0 (November 17, 2020)

### Added

- Ability to pass relevant to array fields!!!

## 3.21.2 (November 14, 2020)

### Fixed

- Bug with field level relevant

### Updated

- Form to always evaluate relevance, and not force the user to pass notify.

## 3.21.1 (November 12, 2020)

### Fixed

- Isssue where state would not update after submit

## 3.21.0 (November 12, 2020)

### Added

- Ability to add async validation functions to inputs

## 3.20.0 (November 11, 2020)

### Added

- Ability to not pass keep state to multistep fields, and also added docs for conditional relevant nested array fields

## 3.19.0 (November 10, 2020)

### Added

- Ability to hide or show fields based on relevant, and notify relevant fields

## 3.18.3 (November 10, 2020)

### Fixed

- bug with resetting array field items

## 3.18.2 (November 9, 2020)

### Fixed

- bug with duplicate fields

## 3.18.1 (November 9, 2020)

### Fixed

- bug with keep state registering phantom fields

## 3.18.0 (November 5, 2020)

### Added

- ability to create custom schema fields

## 3.17.1 (November 3, 2020)

### Fixed

- useField was not adding id to label by default

## 3.17.0 (November 3, 2020)

### Added

- Required attribute to input and automatic type generation for useField hook

## 3.16.1 (November 2, 2020)

### Fixed

- Issue where informed props were not passed down to array fields in schema

## 3.16.0 (November 1, 2020)

### Added

- Ability to have conditional schemas!!!!

## 3.15.0 (October 28, 2020)

### Added

- Ability to add array fields in schema!!!!

## 3.14.0 (October 27, 2020)

### Added

- Formatter and Parser !!!!!

## 3.13.2 (October 27, 2020)

### Fixed

- Issue with strict mode double registering

## 3.13.1 (October 23, 2020)

### Fixed

- Bug where inforemd would crash if schema was missing field that was in JSX ( returns null )

## 3.13.0 (October 23, 2020)

### Added

- Ability to render schema fields in specific paces within JSX!!

## 3.12.0 (October 22, 2020)

### Added

- Added AJV Schema shit!!!

## 3.11.0 (October 21, 2020)

### Added

- Schema shit

## 3.10.1 (October 18, 2020)

### Fixed

- Array fields because I stupidly broke them

#### Added

- Tests for multistep fields
- Better multistep form syntax
- Better multistep docs

## 3.10.0 (September 29, 2020)

### Updated

- internals to modify state direct to improve performance!

## 3.9.0 (June 15, 2020)

### Updated

- useArray field to expose a reset that resets to initial values

## 3.8.1 (May 11, 2020)

### Fixed

- Issue with back and next types for multistep fields

## 3.8.0 (May 4, 2020)

### Added

- Array field Api control for ArrayFieldItems

## 3.7.0 (May 4, 2020)

### Refactored

- To use field ids instead of names

### Added

- `<Relevant>` component

## 3.6.1 (March 2, 2020)

### Updated

- Type file to include preventEnter on form props

## 3.6.0 (March 1, 2020)

### Added

- Ability to pass formController to useField hook

## 3.5.2 (February 28, 2020)

### Fixed

- [Issue](https://github.com/joepuzzo/informed/issues/275) where new version of react would throw warnings due to bad code

## 3.5.1 (February 27, 2020)

### Fixed

- [Issue](https://github.com/joepuzzo/informed/issues/272) where dynamic nested array fields with keep state kept too much state :)

## 3.5.0 (February 25, 2020)

### Added

- New multistep abilities via setCurrent in `formApi` and `Current` in `formState`. See compex multistep form in docs

## 3.4.0 (February 22, 2020)

### Added

- Ability to spread `informed` object on inputs via the `useField` hook

## 3.3.5 (February 22, 2020)

### Updated

- Readme to show useForm example

## 3.3.4 (February 20, 2020)

### Added

- FormState component to assist when debugging!

## 3.3.3 (February 18, 2020)

### Added

- Types for multisetp forms

## 3.3.2 (February 16, 2020)

### Added

- Ability to use cursor position in mask function

## 3.3.1 (February 16, 2020)

### Updated

- Intro examples to inculde on submit example

## 3.3.0 (February 10, 2020)

### Added

- Field level Yup support

## 3.2.1 (February 9, 2020)

### Fixed

- Typo in yup docs and readme

## 3.2.0 (February 9, 2020)

### Added

- Yup support

## 3.1.2 (February 9, 2020)

### Updated

- docs and readme to link to dicord channel

## 3.1.1 (February 8, 2020)

### Added

- apiRef so you can just pass a ref to the form

## 3.1.0 (February 5, 2020)

### Added

- Step functionality to support multistep forms

## 3.0.2 (January 24, 2020)

### Fixed

- Issue https://github.com/joepuzzo/informed/issues/267

## 3.0.1 (January 24, 2020)

### Fixed

- README ( I wish there was a way on npm to update readme without publishing version )

## 3.0.0 (January 24, 2020)

### Fixed

- Issue with array field validation https://github.com/joepuzzo/informed/issues/259
- Issue where informed would throw errors when fields were hidden but referenced

### Added

- Ability to ( in the near future ) add validations to scopes ( Enabled because of code refacotor... will add soon :)

### Changed

- The internals to no longer keep track of giant state object but instead generate it on demand

### Removed

- A bunch of useless code :)

#### Cleaned up

- Large portion of the code .. Mostly the formController!

## 2.11.17 (January 21, 2020)

## Update

- useField to trigger validation when validation related props change

## 2.11.16 (November 18, 2019)

## Fixed

- issue with array field where validation would fail

## 2.11.15 (November 6, 2019)

## Fixed

- issue with array field where removing multiple fields did not remove the data from state

## 2.11.14 (November 5, 2019)

## Removed

- removable prop to inputs because it was a bad idea... now it supports removal nativley

## 2.11.13 (November 4, 2019)

## Added

- removable prop to inputs ( adds support for pairing keep state and array fields such that remove button actually removes field )

## 2.11.12 (November 1, 2019)

## Fixed

- issue with keep state on array fields

## 2.11.11 (November 1, 2019)

## Added

- comp name to useField hook

## 2.11.10 (October 21, 2019)

## Added

- missing setFormError prop to FormApi interface

## 2.11.9 (September 10, 2019)

## Added

- keepState to types

## 2.11.8 (July 16, 2019)

## Adds

- allowEmptyStrings form level prop to types

## 2.11.7 (July 8, 2019)

## Fixes

- issue 227 where allowEmptyStrings form level prop did not work

## 2.11.6 (July 2, 2019)

## Fixes

- issue 219 where array fields would not work with scope

## 2.11.5 (July 2, 2019)

## Fixes

- issue 225 where validation will occur on mount when there are initial values

## 2.11.4 (July 1, 2019)

## Fixes

- issue 215 where selects dont work in Edge becase .. you know.. Microsoft

## 2.11.3 (July 1, 2019)

## Fixes

- warning with useLayoutEffect when using SSR

## 2.11.2 (June 27, 2019)

## Updated

- README file to include minzipped badge

## 2.11.1 (June 18, 2019)

## Fixed

- Issue where initial values changing on multiselects caused looping .. oops

## 2.11.0 (June 14, 2019)

## Updated

- useForm to return user props and a render method
- Form provider to no longer render a `<form></form>` IT NEVER SHOULD HAVE.

## 2.10.2 (June 13, 2019)

## Fixed

- Issue where initial values did not change when form was reset

## 2.10.1 (June 11, 2019)

## Fixed

- Issue where array level validation would not trigger for complex nested fields within array field

## Added

- length as a second parameter to arrayFields validate function

## 2.10.0 (June 7, 2019)

## Added

- ability to pass validation function to an array field
- arrayFields are now treaded as "shadow" fields

## 2.9.0 (June 6, 2019)

## Added

- useArrayField hook

## 2.8.2 (June 5, 2019)

## Added

- ability to change out form options such as validateFields

## 2.8.1 (June 5, 2019)

## Fixed

- issue with addWithInitialValue when using add and then addWithInitialValue

## 2.8.0 (June 5, 2019)

## Added

- addWithInitialValue to the `ArrayField`

## 2.7.8 (May 31, 2019)

## Fixed

- issue where initial values were not being formatted

## 2.7.7 (May 30, 2019)

## Fixed

- issue where initial values were not being masked

## 2.7.6 (May 29, 2019)

## Updated

- Types file to support validate on formApi

## 2.7.5 (May 29, 2019)

## Updated

- Types file to support any type on form errors

## 2.7.4 (May 23, 2019)

### Fixed

- documentation for creating custom inputs

### Added

- the ability to pass your own ref to inputs

## 2.7.3 (May 22, 2019)

### Fixed

- issue with validation triggering when keep state and validate on blur

## 2.7.2 (May 21, 2019)

### Added

- made `maskWithCursorOffset` optional in types

## 2.7.1 (May 21, 2019)

### Added

- `maskWithCursorOffset` to the type defs

## 2.7.0 (May 21, 2019)

### Added

- `maskWithCursorOffset` prop to inputs

## 2.6.15 (May 20, 2019)

### Added

- maintainCursor to types

## 2.6.14 (May 16, 2019)

### Added

- render and userProps to field context types

## 2.6.13 (May 16, 2019)

### Added

- maskedValue to types

## 2.6.12 (May 14, 2019)

### Added

- getters to useFields field api

## 2.6.11 (May 11, 2019)

### Added

- useField hook to the docs

### Updated

- the interface for useField hook

## 2.6.10 (May 10, 2019)

### Fixed

- issue where initialization code in useform was in the effect and not in constructor

## 2.6.9 (May 10, 2019)

### Fixed

- attempting to fix issue that I think is caused by useEffect in useForm hook

## 2.6.8 (May 10, 2019)

### Fixed

- issues cause by using `useMemo` instead of `useState` for initial render stuff

## 2.6.7 (May 9, 2019)

### Added

- exists function to the field api types

## 2.6.6 (May 9, 2019)

### Added

- exists function to the field api so you can check to see if that field exists

## 2.6.5 (May 9, 2019)

### Fixed

- issue where inital render of useFieldApi would fail when field was not registered yet

## 2.6.4 (May 9, 2019)

### Updated

- useForm hook so that the event handlers can change

## 2.6.3 (May 7, 2019)

### Removed

- debug as a dependency and added my own :)

## 2.6.2 (May 3, 2019)

### Fixed

- issue with default register context missin getField function

## 2.6.1 (May 3, 2019)

### Fixed

- issue with `useFieldApi` hook and `withFieldApi` HOC where reset and validate were not there

### Added

- a few more tests to increase test coverage!!!! wooo

## 2.6.0 (May 2, 2019)

### Added

- `useForm` hook!!! and `FormProvider` component!!!

## 2.5.0 (April 30, 2019)

### Updated

- useField hook to useEffect instead of useLayoutEffect

## 2.4.0 (April 30, 2019)

### Added

- preventEnter prop to the form so users can prevent enter key form submission

## 2.3.2 (April 22, 2019)

### Updated

- Issue with dynamic arrays and initial values

## 2.3.1 (April 12, 2019)

### Updated

- Babel build

## 2.3.0 (April 3, 2019)

### Added

- `allowEmtyStrings` prop to the form
- `allowEmtyString` prop to inputs

### Fixed

- issue where setValues would not allow empty strings

## 2.2.0 (March 29, 2019)

### Added

- `setFormError` function to the form api
- `validate` function to the form api

## 2.1.15 (March 28, 2019)

### Fixed

- Issue with setValues missing from the default context

## 2.1.14 (March 27, 2019)

### Fixed

- Issue where reset would call validation

## 2.1.13 (March 18, 2019)

### Updated

- Allowing for optional generic on FormValue

## 2.1.12 (March 13, 2019)

### Updated

- ref to be any type in typings

## 2.1.11 (March 12, 2019)

### Fixed

- issue in typings for ref field on FieldContext

## 2.1.10 (March 12, 2019)

### Fixed

- issue when using a field NOT in the context of a form

## 2.1.9 (March 8, 2019)

### Fixed

- another issue where initial values did not work when keep state was passed

## 2.1.8 (March 8, 2019)

### Fixed

- issue where initial values did not work when keep state was passed

## 2.1.7 (March 3, 2019)

### Fixed

- issue where initial values did not work for `ArrayFields`

## 2.1.6 (Feb 21, 2019)

### Updated

- typing files for type script users

## 2.1.5 (Feb 19, 2019)

### Fixed

- Issue with text area input not setting typed value

## 2.1.4 (Feb 19, 2019)

### Added

- `maskOnBlur` prop to inputs

## 2.1.3 (Feb 14, 2019)

### Added

- `fieldExists` api function to check if field exists

## 2.1.2 (Feb 14, 2019)

### Fixed

- Issue where form that is submitted through enter key would try to prevent default

## 2.1.1 (Feb 14, 2019)

### Fixed

- Issue where form values would not get passed to validation function when touched

## 2.1.0 (Feb 14, 2019)

### Updated

- Format and parse to set maskedValue instead of value

## 2.0.5 (Feb 14, 2019)

### Fixed

- Issue where you could NOT set 0 null or false as initial values because they are falsey

## 2.0.4 (Feb 13, 2019)

### Added

- validateFields function to the form!!!

## 2.0.3 (Feb 13, 2019)

### Fixed

- Issue where reset would not work for scoped fields

### Added

- Set Values to the form api!!!

## 2.0.2 (Feb 13, 2019)

### Fixed

- Issue where ArrayField was prefixing all fields with 'field'
- Issue where when input fields changed input did not rerender.

## 2.0.1 (Feb 10, 2019)

### Fixed

- Issue where render and component props were getting passed to the dom form

## 2.0.0 (Feb 7, 2019)

### Added

- useFieldApi
- useFieldState
- useFormApi
- useFormState
- useField
- format
- parse
- maintianCursor ( fixes issue where cursor jumps to end on mask )
- ArrayField ( Check out the docs! this is sick! )
- Form Level validation ( function that can invalidate the form as a whole )
- debug prop that allows you to visually view the rendering!

### Changed

- the field `"siblings.1"` now resolves to `values.siblings[1]`, it used to resolve to `values.siblings.1`
- the field `"siblings['2']"` now resolves to `values.siblings[2]`, it used to resolve to `values.siblings.2`
- withFormApi will no longer trigger a rerender if the fomrs state changes. This is a great optimization for those who want to modify but dont care about the form state!
- the `validate` prop now expects the validation function to return `undefined` if there is no error. Any other returned value (including falsey `null`, `0`, etc will be treated as an error for the field.

### Removed

- The Field Component
- `fieldExists` not needed
- `setState` will maybe add later but its complex and out of scope ATM
- `setValues` will maybe add later but its complex and out of scope ATM ( as of V 2.0.3 its back! )
- `preSubmit` was never needed.. developers can do this themselves
- Async Validation. Async validation led to many issues that overcomplicated `informed`. We determined this is something that the developer could achive on there own for now but we may look into adding this in the future.

## 1.10.12 ( December 4, 2018 )

### Updated

- typescript definition file

## 1.10.11 & 1.10.10 I ran version patch twice lol ( December 4, 2018 )

### Updated

- Select forward ref

## 1.10.9 ( November 16, 2018 )

### Updated

- files in package json to include typeigs

## 1.10.8 ( November 8, 2018 )

### Added

- type file for typescript

## 1.10.7 ( October 11, 2018 )

### Updated

- Name of withFormSate

## 1.10.6 ( October 2, 2018 )

### Fixed

- Skipped test for select!!!

### Updated

- Select to use new ref interface

## 1.10.5 ( September 14, 2018 )

### Added

- License

## 1.10.4 ( August 13, 2018 )

### Fixed

- Issue with @babel/runtime was the dep when it should have ben @babel/runtime-corejs2

## 1.10.3 ( August 13, 2018 )

### Fixed

- Issue with @babel/runtime for real this time

## 1.10.2 ( August 13, 2018 )

### Fixed

- Issue with @babel/runtime

## 1.10.1 ( August 13, 2018 )

### Removed

- mistakenly added dev deps that were deps... oops

## 1.10.0 ( August 13, 2018 )

### Added

- submits to the form state

## 1.9.0 ( August 8, 2018 )

### Rebuilt

- Added prettier so all the files have been changed... so i rebuilt to have source maps match code

## 1.8.1 ( August 1, 2018 )

### Rebuilt

- Attempting to simply rebuild lib due to possible build issue

## 1.8.0 ( August 1, 2018 )

### Updated

- initialValue to get exposed as prop to custom fields

## 1.7.5 ( July 31, 2018 )

### Added

- Source maps

## 1.7.4 ( July 26, 2018 )

### Fixed

- Issue where Basic radio group was not getting exported

## 1.7.3 ( July 23, 2018 )

### Fixed

- issue where bind to field did not pass down the field prop.

## 1.7.2 ( July 20, 2018 )

### Fixed

- Issue where element wont get removed from array when deregistering field... this is used when dynamically removing value

## 1.7.1 ( July 20, 2018 )

### Added

- Field prop is now exposed to field elements and default inputs pass field as name to html inputs

## 1.7.0 ( July 18, 2018 )

### Added

- fieldExists method to the formApi

## 1.6.0 ( July 16, 2018 )

### Added

- onValueChange prop to inputs so you can tie into when values change!!

## 1.5.2 ( July 13, 2018 )

### Fixed

- Issue where prop changes to fields would not get recognized

## 1.5.1 ( July 13, 2018 )

### Fixed

- issue where i forgott to add @babel/runtime as dependency

## 1.5.0 ( July 12, 2018 )

### Added

- asyncValidation prop to inputs
- asyncValidateOnBlur prop to inputs

## 1.4.0 ( July 5, 2018 )

### Added

- Basic input fields so users can more easily create custom inputs
- Docs for creating custom inputs

## 1.3.11 ( July 9, 2018 )

### Fixed

- issue where you could not nest scope

## 1.3.10 ( July 5, 2018 )

### Fixed

- issue where you could not pass initialValue=false to checkbox

## 1.3.9 ( July 5, 2018 )

### Fixed

- issue where mutable values were getting passed to onSubmit and getState

## 1.3.8 ( July 2, 2018 )

### Fixed

- issue where path array was being build every get and set

## 1.3.7 ( July 2, 2018 )

### Fixed

- issue where onChange was getting passed to internal form element

## 1.3.6 ( June 28, 2018 )

### Added

- globalObject: 'this' to the webpack dist config to support SSR

## 1.3.5 ( June 28, 2018 )

### Fixed

- Issue with event emitter limit ( need to look into alternative solution )
- Removed depricated sandbox sinon usage that was causing errors during tests

## 1.3.3 ( June 28, 2018 )

### Updated

- Webpack dist configuration to keep class names

## 1.3.2 ( June 28, 2018 )

### Fixed

- Issue were initialValue was getting passed all the way down to html input
- Issue where form would not rerender when field was registered

## 1.3.1 ( June 28, 2018 )

### Fixed

- Issue were validateOnMount was getting passed all the way down to html input

## 1.3.0 ( June 28, 2018 )

### Added

- mask so you can mask values at field level. example `value => value + '!!!'`

## 1.2.1 ( June 27, 2018 )

### Added

- hook so you can add a button with type=reset and it will reset the form

## 1.2.0 ( June 27, 2018 )

### Added

- validateOnMount to input props

## 1.1.2 ( June 25, 2018 )

### Moved

- React and React-Dom to dev dependencies

## 1.1.1 ( June 18, 2018 )

### Fixed

- Bug where i did not do null check on event within on submit

## 1.0.1 ( June 15, 2018 )

### Added

- Notify prop to inputs that allows you to notify other fields when your error state changes ( see docs )

## 1.0.0 (June 12, 2018)

### Added

- Text
- TextArea
- Radio Group
- Radio
- Select
- Select as Multiselect !!!
- Checkbox
- withRadioGroup
- withFieldApi
- withFieldState
- withFormApi
- withFormState
- asField
- Form
- Field

### Changed

**
Note: this was the first release but i wanted to include changes from
`react-form` so here they are:
**

- `formApi` was split into two parts `formApi` ( contains just functions ) `formState` ( contains just form state )
- Form level validation is gone. You do all validation via field validation.
- `defaultValues` Form prop is now called `initialValues`
- `onChange` Form prop only recieves the `formState`. It used to retrieve the form Api as well.
- `preventDefault` Form prop is now `dontPreventDefault`
- `getApi` Form prop just returns the formApi, not the state and the api.
- `Form` component now renders the `form` element internally. So you dont have to "hook it up" anymore!!

### Removed

**
Note: this was the first release but i wanted to include things that were removed from
`react-form` so here they are:
**

- `NestedField` you can use `Scope` instead but all it does is scope internal fields to `scope="your-scope"`
- validateOnSubmit was removed. Now the form always validates on submit by default and you can opt into sooner validation at field level.
- `defaultValues` form prop is now called `initialValues`
- `pure` Form prop. Its not needed anymore due to the use of `React.PureComponent` internally.
- add, remove, and swap values. The developer can achive this on there own without the use of internal functionality.
- Array Syntax. In order to keep things simple we now only support the string syntax for field names.
- Async Validation. Async validation led to many issues that overcomplicated `react-form`. We determined this is something that the developer could achive on there own for now but we may look into adding this in the future.
- Warning and Success have been removed for now to keep lib lean but we may add additional functions in the future.
