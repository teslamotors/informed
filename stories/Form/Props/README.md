# Form Props

`Informed`s Form element can take many props. Below is table that defines what
props are available and what they do.

| Name           | Type          | Description                                   |
|----------------|---------------|-----------------------------------------------|
| children       | node OR func  | A function that is given the form api and form state as props parameter FAAC ( Function As A Child ). Or normal JSX children |
| component      | node          | A React component that is given the `formApi` and `formState` as props |
| render         | func          | A render function that is given the `formApi` and `formState` as props |
| onSubmit       | func          | A function that gets called when form is submitted successfully. The function receives the values as a parameter |
| preSubmit      | func          | Function that is a value filter that happens after validation, and before a successful submission. Use it to scrub and/or clean your values before they are submitted. Whatever you return will NOT replace all of the values in that form's state, but will be passed to the onSubmit method. |
| initialValues   | obj          | Use this if you want to populate the form with initial values. |
| onChange        | func          | Function that gets called when form updates. Function receives the formState as a parameter.  |
| onValueChange   | func          | Function that gets called when forms values change. Function receives the values as a parameter.  |
| dontPreventDefault | bool       | The default is to always "preventDefault" when a form submits. Pass this to disable "preventingDefault". You would, for example, pass this in when you want to use a good old form submission using action="/foo.php" on your form. |
| getApi         | func          | To retrieve the form api as a callback, you can pass a function to the `getApi` prop. Your function will be called with the formApi as the only parameter. You can save this as a reference to easily manipulate your form from outside of the form scope. Note: this is no different then using a ref in react ( same principle ). |
| onSubmitFailure         | func          | Function that gets called when submission fails due to errors. Function will receive the errors as a parameter |
