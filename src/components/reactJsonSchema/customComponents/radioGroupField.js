import React, { Component } from 'react';

import {
  EuiRadioGroup,
  EuiFormRow,
} from '@elastic/eui';

export default class extends Component  {
  constructor(props) {
    super(props);

    const idPrefix = props.idSchema.$id;

    const opts = props.schema['enum'] || props.schema['oneOf'] || props.schema['anyOf'];

    this.options = opts.map((obj, index) => {
      return {
        id: `${idPrefix}${index}`,
        label: obj['title'] || obj,
      }
    });

    this.state = {
      radioIdSelected: "",
    };
  }

  onChange = optionId => {
    this.setState({
      radioIdSelected: optionId,
    });

    this.props.onChange(this.options.find(x => x.id == optionId).label)
  };

  render() {
    return (
      <EuiFormRow helpText={this.props.schema.helpText} fullWidth>
        <EuiRadioGroup
          options={this.options}
          idSelected={this.state.radioIdSelected}
          onChange={this.onChange}
          name={this.props.idSchema.$id}
        />
      </EuiFormRow>
    );
  }
};
