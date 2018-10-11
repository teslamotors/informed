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
