# Optimization

Informed has been highly optomized to limit rendering. This page uses
the debug flag to visually represent the rendering on each input.

<!-- STORY -->

```jsx
<Form autoComplete="off">
  <label>
    First name:
    <Input debug field="name" />
  </label>
  <Scope scope="favorite">
    <label>
      Favorite color:
      <Input debug field="color" />
    </label>
    <label>
      Favorite food:
      <Input debug field="food" />
    </label>
  </Scope>
  <label>
    Friend 1:
    <Input debug field="friends[0]" />
  </label>
  <label>
    Friend 2:
    <Input debug field="friends[1]" />
  </label>
  <label>
    Friend 3:
    <Input debug field="friends[2]" />
  </label>
  <label>
    Password:
    <Input
      debug
      field="password"
      notify={['confirmPassword']}
      validateOnChange
      validate={passwordValidation}
    />
  </label>
  <label>
    Confirm Password:
    <Input
      debug
      field="confirmPassword"
      notify={['password']}
      validateOnChange
      validate={passwordValidation}
    />
  </label>
  <label>
    Bio:
    <TextArea debug field="bio" />
  </label>
  <RadioGroup field="gender">
    <label>
      Male: <Radio debug value="male" />
    </label>
    <label>
      Female: <Radio debug value="female" />
    </label>
  </RadioGroup>
  <label>
    Relationship status:
    <Select debug field="status">
      <Option value="" disabled>
        Select One...
      </Option>
      <Option value="single">Single</Option>
      <Option value="relationship">Relationship</Option>
      <Option value="complicated">Complicated</Option>
    </Select>
  </label>
  <label>
    Colors:
    <Select
      debug
      field="colors"
      multiple
      style={{ height: '100px', width: '200px' }}>
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
      <Option value="yellow">Yellow</Option>
      <Option value="orange">Orange</Option>
      <Option value="purple">Purple</Option>
    </Select>
  </label>
  <label>
    Authorize: <Checkbox debug field="authorize" />
  </label>
  <button type="submit">Submit</button>
</Form>
```
