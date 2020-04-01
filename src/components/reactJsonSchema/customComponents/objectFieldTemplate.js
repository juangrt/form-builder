import React, { Fragment } from 'react'
import {
  EuiDescribedFormGroup,
} from '@elastic/eui';

export default function ObjectFieldTemplate(props) {
  return (
    <Fragment>
      {
        props.properties.map((element, index) => {
          return (
            <EuiDescribedFormGroup
              key={index}
              title={<h3>{element.content.props.schema.descriptionTitle}</h3>}
              description={element.content.props.schema.description}>
            {element.content}
          </EuiDescribedFormGroup>
          );
        })
      }
    </Fragment>
  );
};
