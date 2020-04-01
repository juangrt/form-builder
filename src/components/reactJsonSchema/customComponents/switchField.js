import React from 'react';
import {
  EuiSwitch,
  EuiFormRow,
} from '@elastic/eui';

export default function SwitchField(props) {
  return (
    <EuiFormRow helpText={props.schema.helpText} fullWidth>
      <EuiSwitch
        id={props.idSchema.$id}
        key={props.idSchema.$id}
        label={props.schema.title}
        checked={props.formData}
        onChange={(event) => props.onChange(event.target.checked)}
      />
    </EuiFormRow>
  );
};
