import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import Layout from '../layout';
// import schema from './schema';
// import uiSchema from './uiSchema';
import schema from './supplemental_forms/ubs';
//import schema from './supplemental_forms/ubs_if_then_else';
import uiSchema from './supplemental_forms/ubs_ui';

import {
  EuiButton,
} from '@elastic/eui';

const log = (type) => {};


export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        signer_type_entity: true
      },
    };
  }

  onChange({ formData }) {
    this.setState({
      formData: formData
    });
    console.log(formData);
  }

  render() {
    const {
      formData,
    } = this.state;

    return (
      <Layout pageTitle="JSON Schema" contentTitle="Supplemental Form">
        <Form
            //fields={fields}
            tagName="div"
            liveValidate={true}
            omitExtraData={true}
            liveOmit={false}
            formData={formData}
            schema={schema}
            uiSchema={uiSchema}
            onChange={this.onChange.bind(this)}
            onSubmit={log("submitted")}
            onError={log("errors")} >

          <EuiButton fill type="submit">
            Save and Exit
          </EuiButton>
        </Form>
      </Layout>
    );
  }
};
