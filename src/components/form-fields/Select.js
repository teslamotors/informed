import React from 'react';
import asField from '../../HOC/asField';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let selected = [...this.refs.select]
      .filter(option => option.selected)
      .map(option => option.value);

    this.props.fieldApi.setValue(
      this.props.multiple ? selected : selected[0] || ''
    );

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const { fieldApi, fieldState, ...props } = this.props;
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const {
      onChange,
      onBlur,
      field,
      initialValue,
      forwardedRef,
      children,
      multiple,
      ...rest
    } = props;
    return (
      <select
        {...rest}
        multiple={multiple}
        name={field}
        ref="select"
        value={value || (multiple ? [] : '')}
        onChange={this.handleChange}
        onBlur={e => {
          setTouched();
          if (onBlur) {
            onBlur(e);
          }
        }}>
        {children}
      </select>
    );
  }
}

export { Select as BasicSelect };

export default asField(Select);
