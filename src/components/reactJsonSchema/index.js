import React, { useState } from 'react';
import Form from "react-jsonschema-form";
import Layout from '../layout';
import schema from './supplemental_forms/ubs';
import uiSchema from './supplemental_forms/ubs_ui';
import { useLocation } from 'react-router-dom';

import {
  EuiButton,
} from '@elastic/eui';

export default function() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formData = {
    signer_type_entity: searchParams.get('signer_type_entity') == 'true'
  };

  const log = (type) => {};

  return (
    <Layout pageTitle="JSON Schema" contentTitle="Supplemental Form">
      <Form
          tagName="div"
          liveValidate={true}
          omitExtraData={true}
          liveOmit={false}
          formData={formData}
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={log("submitted")}
          onError={log("errors")} >

        <EuiButton fill type="submit">
          Save and Exit
        </EuiButton>
      </Form>
    </Layout>
  );
};
