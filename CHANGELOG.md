## 1.3.2 ( June 27, 2018 )

### Fixed
- Issue were initialValue was getting passed all the way down to html input
- Issue where form would not rerender when field was registered 

## 1.3.1 ( June 27, 2018 )

### Fixed
- Issue were validateOnMount was getting passed all the way down to html input

## 1.3.0 ( June 27, 2018 )

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
