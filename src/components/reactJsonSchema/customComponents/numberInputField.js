import React, { Component } from 'react';
import {
  EuiFieldNumber,
  EuiFormRow,
} from '@elastic/eui';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = e => {
    const sanitizedValue = parseInt(e.target.value, 10);
    this.props.onChange(isNaN(sanitizedValue) ? '' : sanitizedValue)
  };

  render() {
    return (
      <EuiFormRow label={this.props.schema.title} helpText={this.props.schema.helpText} fullWidth>
        <EuiFieldNumber
          placeholder={this.props.schema.placeholder}
          value={this.props.formData}
          onChange={this.onChange}
        />
      </EuiFormRow>
    );
  }
}
