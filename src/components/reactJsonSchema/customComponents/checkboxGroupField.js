import React, { Component } from 'react';

import {
  EuiCheckboxGroup,
  EuiFormRow,
} from '@elastic/eui';

export default class extends Component  {
  constructor(props) {
    super(props);

    const idPrefix = props.idSchema.$id;

    this.checkboxes = props.schema.items.enum.map((name, index) => {
      return {
        id: `${idPrefix}${index}`,
        label: name,
      }
    });

    this.state = {
      checkboxIdToSelectedMap: {},
    };
  }

  onChange = optionId => {
    const newCheckboxIdToSelectedMap = {
      ...this.state.checkboxIdToSelectedMap,
      ...{
        [optionId]: !this.state.checkboxIdToSelectedMap[optionId],
      },
    };

    this.setState({
      checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
    });

    this.props.onChange(this.checkboxes.find(x => x.id == optionId).label);
  };

  render() {
    return (
      <EuiFormRow helpText={this.props.schema.helpText} fullWidth>
        <EuiCheckboxGroup
          options={this.checkboxes}
          idToSelectedMap={this.state.checkboxIdToSelectedMap}
          onChange={this.onChange}
        />
      </EuiFormRow>
    );
  }
};
