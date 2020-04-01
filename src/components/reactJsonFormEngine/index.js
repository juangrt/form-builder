import React, { Component } from 'react';
import Layout from '../layout';
// Import the API
import { Form, FormEngine } from 'react-json-form-engine';
import definition from './formDefinition';


export default function() {
  const json = '{"signer_type_entity": "true"}';
  const instance = new FormEngine(definition, json);

  return (
    <Layout pageTitle="Json Form Engine" contentTitle="Supplemental Form">
      <Form
        instance={instance}
        hideFormTitle={true}
        hideFormBorder={true}
        hideSubsectionTitles={true}
        hideSubsectionSubtitles={true}
        onUpdate={({id, value}) => {
          console.log(id);
          console.log(value);
        }}
        onSubmit={hasError => {
          // Do stuff
        }}
      />
    </Layout>
  );
};
