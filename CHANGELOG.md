## 4.37.0 (Nov 29th, 2022)

- added ability to pass `keep` to form fields such that users can specify specific state to keep

```js
// Example where we only keep value

<Input name="spouse" label="Spouse name:" required keep={{ value: true }} />
```

## 4.36.2 (Nov 9th, 2022)

- removed console log from FormController

## 4.36.1 (Nov 3rd, 2022)

- added missing type for useArrayFieldItemState

## 4.36.0 (Nov 1st, 2022)

- array fields add and remove now trigger onValueSet

## 4.35.2 (Oct 26th, 2022)

- multistep type improvements

## 4.35.1 (Oct 25th, 2022)

- fixed issue where gatherOnMount would not gather after a reset

## 4.35.0 (Oct 19th, 2022)

- added ability to setValueQuietly

## 4.34.0 (Oct 13th, 2022)

- added useInformedApi that will allow user to manipulate multiple forms

## 4.33.0 (Oct 11th, 2022)

- added ability to remove specific index from array field api

## 4.32.0 (Sep 30th, 2022)

- added ability to disable and enable the form via formApi

## 4.31.4 (Sep 22nd, 2022)

- array fields dirt now gets set when a user adds or removes

## 4.31.3 (Sep 22nd, 2022)

- Fixed issue where react strict mode and 18 would not cleanup fields values when they were unmounted

## 4.31.2 (Sep 20th, 2022)

- Fixed issue where reseting array fields with new initial values would still use old ones

## 4.31.1 (Sep 19th, 2022)

- When formatting using createIntlNumberFormatter and currencySign being accounting () would not trigger negative

```js
// When user types -2 or ($2) it would not format correctly
const { formatter, parser } = utils.createIntlNumberFormatter('en-US', {
  style: 'currency',
  currency: 'USD',
  currencySign: 'accounting'
});
```

## 4.31.0 (Sep 14th, 2022)

- Form now gets set to dirty when a user performs an add operation on an array field

## 4.30.1 (Sep 12th, 2022)

- Fixed issue with mask prop not masking last character

## 4.30.0 (Sep 11th, 2022)

- Added mask prop back to inputs!!!!!

## 4.29.1 (Sep 8th, 2022)

- Fixed useFormStateSelector when using SSR

## 4.29.0 (August 30th, 2022)

- added onValueSet to form that only gets called when the value is explicitly set

## 4.28.9 (August 30th, 2022)

- Fixed issue where validateOnMount would not trigger when the fields were reset to their initial state

## 4.28.8 (August 25th, 2022)

- Fixed issue where async validate would not trigger when you pass relevance prop to input and input becomes relevant

## 4.28.7 (August 24th, 2022)

- Fixed issue where locales that use comma instead of dot for fractions would not properly format for thousands

## 4.28.6 (August 23nd, 2022)

- Fixed issue where if form was reset array field with defualt values would not reset to the default values

## 4.28.5 (August 22nd, 2022)

- Fixed issue where showErrorIfDirty would not show error if touched

## 4.28.4 (August 19th, 2022)

- Fixed issue where useFieldSubscription would not spread fields to the useEffect causing potential infinate loops

## 4.28.3 (August 15th, 2022)

- Fixed issue where user would type the decimalChar in intl number formatter

## 4.28.2 (August 10th, 2022)

- Added mising types https://github.com/teslamotors/informed/pull/415

## 4.28.1 (August 10th, 2022)

- Fixed issue with number formatter when inititial value is number

## 4.28.0 (August 5th, 2022)

- Added ability to pass default values to array fields

## 4.27.0 (August 4th, 2022)

- Added `useFormStateSelector` hook

## 4.26.0 (August 3rd, 2022)

- Added ability to get field name from onValueModified and onValueChange props to form

## 4.25.0 (August 2nd, 2022)

- Added disabled prop back onto form props

## 4.24.0 (August 1st, 2022)

- Added useInformed to get access to any controller

## 4.23.0 (July 31st, 2022)

- Added useArrayFieldState

## 4.22.0 (July 29th, 2022)

- Added ability to pass focusOnInvalid to the form and also added focusFirstError to formApi

## 4.21.0 (July 19th, 2022)

- Added ability to pass clean function to inputs

## 4.20.1 (July 14th, 2022)

- Fixed issue where evaluate in useConditional would not trigger when form was reset

## 4.20.0 (July 11th, 2022)

### Added

- ability to pass oneOf as an if condition to schemas
- ability to match fields whos values are arrays with enum in schema conditions

```js
allOf: [
  {
    if: {
      properties: {
        cars: { oneOf: ['tesla', 'jeep'] }
      },
      required: ['cars']
    },
    then: {
      properties: {
        carName: {
          type: 'string',
          title: 'Cars name',
          'ui:control': 'input'
        }
      }
    }
  }
];
```

## 4.19.3 (July 5th, 2022)

### Fixed

- fixes #411 bad type definition for onSubmit

## 4.19.2 (July 5th, 2022)

### Updated

- package.json to allow react 18 as peer dep

## 4.19.1 (June 24th, 2022)

### Fixed

- issue whith useArray field where if initial value was not array it would crash

## 4.19.0 (June 22nd, 2022)

### Added

- onValueChange prop to fields

## 4.18.2 (June 22nd, 2022)

### Fixed

- issue with key in FormField, this issue can be seen when you have changing schema

## 4.18.1 (June 21st, 2022)

### Updated

- README to have correct urls

## 4.18.0 (June15th, 2022)

### Added

- ability to `if: { properties: { status: {const: ["active"]} } },` in schema ( support array conditions )

## 4.17.0 (June 12th, 2022)

### Added

- resetPath to form api to allow user to pass in path to reset all fields that live under that path

## 4.16.2 (June 9th, 2022)

### Fixed

- issue where react 18 with strict mode would kill useStateWithGetter function ( relevance was broken )

## 4.16.1 (June 3rd, 2022)

### Fixed

- issue where changing schema options would not reset value

## 4.16.0 (June 2nd, 2022)

### Added

- ability get formApi formState and scope in validate function

## 4.15.0 (June 2nd, 2022)

### Added

- ability to pass a function as validateWhen

```js
validateWhen={ scope => `${scope.fieldName}`}
```

## 4.14.0 (May 26th, 2022)

### Added

- `validateModified` prop to form so lib will only perform validation on modified fields

## 4.13.1 (May 25th, 2022)

### Fixed

- issue where decimal was getting added when formatter explicitly was told not to add

```js
utils.createIntlNumberFormatter('en-US', {
  style: 'decimal',
  signDisplay: 'never',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
```

## 4.12.1 (May 12th, 2022)

### Fixed

- issue with missing types Debug and Schema Fields

## 4.12.0 (May 12th, 2022)

### Fixed

- issue with isChild

### Added

- hidden field back to default exported components

## 4.11.4 (May 4th, 2022)

### Fixed

- issue where Relevance inside of Relevance might prevent cleanup on form state

## 4.11.3 (May 2nd, 2022)

### Fixed

- issue where nested array fields removal would break

## 4.11.2 (April 29th, 2022)

### Fixed

- issue where custom error messages did not work in allOf
- issue where required:[] on allOf was not working

## 4.11.1 (April 28th, 2022)

### Fixed

-issue where zero ( 0 ) would not work for minimum and maximum due to bad falsey check lol classic

## 4.11.0 (April 28th, 2022)

### Added

- onNativeChange handler to useField

## 4.10.0 (April 27th, 2022)

### Added

- onValid and onInvalid to useForm

## 4.9.4 (April 19th, 2022)

### Fixed

- issue where we would not pass all options to intl formatter

## 4.9.3 (April 13th, 2022)

### Fixed

- issue where after a gather data the field-value event would not get triggered so evaluate would never get called

## 4.9.2 (April 13th, 2022)

### Fixed

- issue where FormComponents was not rendering from components option

## 4.9.1 (April 12th, 2022)

### Fixed

- issue where modified would NOT be correct when allowEmptyString was passed

## 4.9.0 (April 12th, 2022)

### Added

- `formState.modified`
- `fieldState.modified`

## 4.8.1 (April 4th, 2022)

### Fixed

- Issue where errors would get kept when going to previous multistep step

## 4.8.0 (March 31st, 2022)

### Added

- useConditional hook and ability to pass `evaluate` and `evaluateWhen`

## 4.7.0 (March 29th, 2022)

### Added

- ability to pass gatherOnMount to a field

## 4.6.1 (March 22nd, 2022)

### Fixed

- misnamed `gatherData` prop

## 4.6.0 (March 22nd, 2022)

### Added

- `gatherData` prop to allow user to get asnyc information for a field

## 4.5.12 (March 22nd, 2022)

### Fixed

- Missing types for default exported fields
- Missing type for `required`

## 4.5.11 (March 20th, 2022)

### Fixed

- issue where allowEmptyString and allowEmptyStrings where broken

## 4.5.10 (March 18th, 2022)

### Fixed

- issue where `step` was missing from multistep type

## 4.5.9 (March 18th, 2022)

### Fixed

- issue with propertyOrder in nested schemas

## 4.5.8 (March 18th, 2022)

### Fixed

- issue with more than double nested schemas
- issue with Multistep.Step types

## 4.5.7 (March 9th, 2022)

### Fixed

- issue with changing options on schema fields ( undefined would clobber defined values in option merge )

## 4.5.6 (March 8th, 2022)

### Fixed

- issue where changing validation params would not rebuild validation function

## 4.5.5 (March 8th, 2022)

### Fixed

- issue where multistep steps would not deregister

## 4.5.4 (Feb 28th, 2022)

### Fixed

- issue where multistep steps would not clean up after themselves

## 4.5.3 (Feb 22th, 2022)

### Fixed

- issue with touchAllFields not touching fields within an array

## 4.5.2 (Feb 18th, 2022)

### Fixed

- Another Issue with debugger in react native that caused crash

## 4.5.1 (Feb 16th, 2022)

### Fixed

- Issue with debugger in react native

## 4.5.0 (Feb 16th, 2022)

### Added

- onValueModified prop to useForm

## 4.4.0 (Feb 15th, 2022)

### Added

- ability to pass reset options to reset field

## 4.3.0 (Feb 15th, 2022)

### Added

- onValueChange prop to useForm

## 4.2.0 (Feb 10th, 2022)

### Added

- Ability to add n items to array field by passing add(3) a number to add

## 4.1.2 (Feb 10th, 2022)

### Fixed

- Missing form level option for keepState and keepStateIfRelevant

## 4.1.1 (Feb 9th, 2022)

### Fixed

- Stupid issue with safari throwing a type error when trying to check for selectionStart on event.target

## 4.1.0 (Feb 8th, 2022)

### Added

- Ability to use state across multiple forms

## 4.0.35 (Feb 8th, 2022)

### Fixed

- missing types for multistep and formApi

## 4.0.34 (Feb 4th, 2022)

### Fixed

- issue with INTL formatter when used with `EUR` and `en-DE`

## 4.0.33 (Feb 3rd, 2022)

### Fixed

- issue with formatter function not allowing full value

## 4.0.32 (January 26th, 2022)

### Fixed

- issue with FormField not allowing conditional fields

## 4.0.31 (January 25th, 2022)

### Fixes https://github.com/teslamotors/informed/issues/381

- autoFocus on Input throws error

## 4.0.30 (January 24th, 2022)

### Added

- propertyOrder back to schema

## 4.0.29 (January 20th, 2022)

### Added

- asyncValidate to formApi

## 4.0.28 (January 18th, 2022)

### Fixed

- issue with cursor offsets when suffix is added

## 4.0.27 (January 14th, 2022)

### Fixed

- issue with negative cursor offsets

### Fixed

- issue with off by one cursor locations on formatter

## 4.0.25 (January 14th, 2022)

### Fixed

- createIntlNumberFormatter not working with negative numbers

## 4.0.24 (January 7th, 2022)

### Added

- clearValue() function to form and field apis

### Fixed

- Issue where validateOnMount would NOT trigger validation when a field was re-rendered

## 4.0.23 (January 5th, 2022)

### Fixed

- issue with array field items being memoized

## 4.0.22 (January 5th, 2022)

### Fixed

- issue with createIntlNumber mask adding random "[]" sometimes

## 4.0.21 (January 5th, 2022)

### Fixed

- issue where returning "" from validation function would not show error state

## 4.0.20 (January 4th, 2022)

### Fixed

- issue where removing item from array field would not make the form dirty

## 4.0.19 (December 31st, 2021)

### Exposed

- useRelevance hook and added type for it in types

## 4.0.18 (December 23rd, 2021)

### Fixed

- issue where values would get cleared on un-mount

## 4.0.17 (December 17th, 2021)

### Fixed

- issue where I forgot to deregister fields when they became irrelevant

## 4.0.16 (December 17th, 2021)

### Fixed

- issue where I forgot to allow relevanceDeps to be passed to multistep step

## 4.0.15 (December 15th, 2021)

### Moved

- The repo to tesla or go needed to re publish to get updated README to npm

## 4.0.14 (December 15th, 2021)

### Fixed

- forgot to add getCurrentStep to multistepApi
- forgot to add nextStep and previousStep to multistepState

## 4.0.13 (December 15th, 2021)

### Fixed

- issue where set touched did not default meta when field is not there

## 4.0.12 (December 15th, 2021)

### Fixed

- issue where `FormField` could not take field props

## 4.0.11 (December 15th, 2021)

### Fixed

- missing type for Relevant

## 4.0.10 (December 15th, 2021)

### Fixed

- issue where FormProvider was not exported

## 4.0.9 (December 13th, 2021)

### Fixed

- issue where passing showErrorIfTouched={false} would not work

## 4.0.8 (December 10th, 2021)

### Removed

- Empty dependencies object from package.json

## 4.0.7 (December 10th, 2021)

### Fixed

- Issue with relevance subscription when no relevance function

## 4.0.6 (December 9th, 2021)

### Fixed

- Missing functions setValues and setTheseValues

## 4.0.5 (December 9th, 2021)

### Fixed

- Missing types for validate and validateField on FormApi

## 4.0.4 (December 9th, 2021)

### Fixed

- Issue where we forgot to expose form validate
- Missing utils types

## Added

- useScope and useScoper to exports

## 4.0.3 (December 7th, 2021)

### Fixed

- Issue with forms valid and invalid when relevance changes

## 4.0.2 (December 7th, 2021)

### Fixed

- Issue with schema path util `inverter[12].air_filter_ok` would not work

## 4.0.1 (December 7th, 2021)

### Fixed

- Issue with initializing when becoming relevant

## 4.0 !!!!

### Breaking changes

#### onSubmit signature

Old

```
const onSubmit = values => console.log( values );
```

New

```
const onSubmit = formState => console.log( formState.values );
```

#### Text --> Input

Old

```jsx
<Text field="name" />
```

New

```jsx
<Input name="name" />
```

#### apiRef --> formApiRef

Old

```jsx
<Form apiRef={apiRef} />
// OR
<Form getApi={getApi} />
```

New

```jsx
<Form formApiRef={formApiRef} />
```

#### informed:props ( schema )

```
informed:props is now ui:props when using schema based forms
```

#### `asField` has been removed

Instead of doing this

```js
const CustomField = asField({ fieldState, fieldApi }) => {}
```

Do this

```js
const CustomField = props => {
  const { fieldState, fieldApi } = useField(props);
};
```

#### Relevance

The when function for relevance now has this signature

```
when={({formState, formApi, scope}) => {...} }
```

#### yupSchema

```
validationSchema ---> is now yupSchema
```

#### Array Fields

##### Renamed `field` to `name`

```jsx
<ArrayField.Items>
  {({ remove, field }) => (
    <>
      <Input name={field} />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>
```

Is Now

```jsx
<ArrayField.Items>
  {({ remove, name }) => (
    <>
      <Input name={name} />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>
```

##### No more array field path prefixing

Old:

```jsx
<ArrayField.Items>
  {({ remove, field }) => (
    <>
      <Input name={`${field}.name`} />
      <Input name={`${field}.age`} />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>
```

New:

```jsx
<ArrayField.Items>
  {({ remove }) => (
    <>
      <Input name="name" />
      <Input name="age" />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>
```

##### No more values in array field render prop

Old:

```jsx
// Some component you need to use state of array field item
const FieldState = ({ values }) => {
  return (
    <pre>
      <code>{JSON.stringify(values, null, 2)}</code>
    </pre>
  );
};

<ArrayField.Items>
  {({ remove, values }) => (
    <>
      <Input name="name" />
      <Input name="age" />
      <FieldState values={values} />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>;
```

New:

```jsx
// Some component you need to use state of array field item
const FieldState = () => {
  const { values } = useArrayFieldItemState();
  return (
    <pre>
      <code>{JSON.stringify(values, null, 2)}</code>
    </pre>
  );
};

<ArrayField.Items>
  {({ remove }) => (
    <>
      <Input name="name" />
      <Input name="age" />
      <FieldState />
      <button type="button" onClick={remove}>
        Remove
      </button>
    </>
  )}
</ArrayField.Items>;
```

#### Debugging with `<FormState />`

Old:

```jsx
<FormState values errors />
```

New:

```jsx
<Debug values errors />
```

#### Custom Inputs

Minor changes to custom inputs

New:

```jsx
const CustomInput = props => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  // The field state
  const { value, error, showError } = fieldState;

  // The field control
  const { setValue, setTouched } = fieldApi;

  // Everything else
  const { label, id, ...rest } = userProps;

  return render(
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        {...rest}
        id={id}
        ref={ref}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value, e);
        }}
        onBlur={e => {
          setTouched(true, e);
        }}
        style={showError ? { border: 'solid 1px red' } : null}
      />
      {showError ? <small style={{ color: 'red' }}>{error}</small> : null}
    </>
  );
};
```

#### Validation

Validation is now controlled via validateOn="validationString"

By default fields will only validate on blur. To get
more granular validation, simply pass in `validateOn` props.

See table below for mapping:

<br />

| validateOn    | derived       | change       | blur         | submit       | default |
| ------------- | ------------- | ------------ | ------------ | ------------ | ------- |
| change        | change-change | sync + async | sync + async | sync + async |         |
| blur          | blur-blur     | x            | sync + async | sync + async | x       |
| change-blur   | change-blur   | sync         | sync + async | sync + async |         |
| change-submit | change-submit | sync         | sync         | sync + async |         |
| blur-submit   | submit-submit | x            | sync         | sync + async |         |
| submit        | submit-submit | x            | x            | sync + async |         |

<br />

Validation is controlled via the `validateOn` prop, but in order to control when it shows,
use the `showErrorIfError` and `showErrorIfDirty` props. **This is because sometimes you may want the form to be invalid but not show the error to the user yet ( default is `showErrorIfTouched` )**

| prop               | description                                                                                                  | default |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | ------- |
| showErrorIfError   | will set `showError` for that field to true whenever there is an error (typically used with validateOnMount) |         |
| showErrorIfTouched | will set `showError` for that field to true whenever there is an error and the field is touched              | x       |
| showErrorIfDirty   | will set `showError` for that field to true whenever there is an error and the field is dirty                |         |

<br />

Finally we have a use case for validating right away ( on mount )

| prop            | description                     | default |
| --------------- | ------------------------------- | ------- |
| validateOnMount | will trigger validation onMount | false   |

<br />
<br />

---

<br />

## 3.34.0 (June 22, 2021)

### Added

- ability to control when async validation occurs with props

## 3.33.0 (May 21, 2021)

### Added

- createIntlNumberFormatter

## 3.32.3 (May 21, 2021)

### Fixed

- Issue with useFieldState, now returns empty object by default

## 3.32.2 (May 21, 2021)

### Fixed

- Issue with mounting useFieldStates

## 3.32.1 (May 21, 2021)

### Fixed

- Issue with layoutEffect in SSR

## 3.32.0 (May 19, 2021)

### Added

- Ability to walk down a multistep with step selection.

## 3.31.0 (April 26, 2021)

### Added

- formatter functions `formatter = [()=>{}, ()=>{}]`

## 3.30.3 (April 2, 2021)

### Added

- memoized render back because I never should have removed it

## 3.30.2 (March 15, 2021)

### Refactored

- To no longer use event emitter.

## 3.30.1 (March 5, 2021)

### Fixed

- Issue where keep state in scope was not working.

## 3.30.0 (March 2, 2021)

### Added

- Pristine and Dirty to formFieldState

## 3.29.4 (February 24, 2021)

### Updated

- Peer deps to support react v 17

## 3.29.3 (February 5, 2021)

### Fixed

- Issue where ObjectMap `has` would reference wrong get funciton fixes #327

## 3.29.2 (February 4, 2021)

### Fixed

- Issue where carrot pos would be in the wrong place when formatting

### Updated

- `useField` hook to use the `useCarrotPosition` hook ( removed duplicate code )

## 3.29.1 (February 4, 2021)

### Added

- Ability to call `setValue` function for custom formattedObject Inputs

## 3.29.0 (February 2, 2021)

### Added

- Ability to pass `initialize` function for custom initialization of the initial value

## 3.28.0 (February 2, 2021)

### Exposed

- Utils functions that can be used by end users

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
