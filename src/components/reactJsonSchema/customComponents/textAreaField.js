import React from 'react';
import {
  EuiTextArea,
  EuiFormRow,
} from '@elastic/eui';

export default function TextAreaField(props) {
  return (
    <EuiFormRow label={props.schema.title} helpText={props.schema.helpText} fullWidth>
      <EuiTextArea
        fullWidth
        id={props.idSchema.$id}
        value={props.formData}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </EuiFormRow>
  );
}
