import React, { Component, useEffect } from 'react';
import Layout from '../layout';
// Import the API
import { Form, FormEngine } from 'react-json-form-engine';
import definition from './formDefinition';
import { useLocation } from 'react-router-dom';


export default function() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const json_object = {
    signer_type_entity: (
      searchParams.get('signer_type_entity') == 'true' ? 'true' : 'false'
    )
  };
  const json = JSON.stringify(json_object);
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
