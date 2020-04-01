import React from 'react';
import {
  EuiFieldText,
  EuiFormRow,
} from '@elastic/eui';

export default function TextInputField(props) {
  return (
    <EuiFormRow label={props.schema.title} helpText={props.schema.helpText} fullWidth>
      <EuiFieldText
        fullWidth
        id={props.idSchema.$id}
        value={props.value}
        disabled={props.disabled}
        readOnly={props.readonly}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
      </EuiFormRow>
  );
};
