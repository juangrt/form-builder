import React, { Fragment } from 'react';
import {
  EuiForm,
} from '@elastic/eui';

export default function CustomFieldTemplate(props) {
  const {errors, children} = props;
  return (
    <EuiForm isInvalid={errors.length > 0} error={errors}>
      <Fragment>
        {children}
      </Fragment>
    </EuiForm>
  );
};
