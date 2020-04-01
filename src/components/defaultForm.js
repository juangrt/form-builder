import React from 'react';
import schema from '../components/reactJsonSchema/schema';
import Form from "react-jsonschema-form";
import Layout from '../components/layout';

const log = (type) => console.log.bind(console, type);

export default function(props) {
  return (
    <Layout pageTitle="JSON Schema" contentTitle="Default Components">
      <div className="container container-fluid">
        <Form
          tagName="div"
          schema={schema}
          onChange={log("change")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </div>
    </Layout>
  );
}
