import React, { Fragment, Component } from 'react';
import Layout from './layout';

import {
  EuiFieldSearch,
  EuiRange,
  EuiFieldText,
  EuiTextArea,
  EuiFormRow,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiButton,
  EuiLink,
  EuiDescribedFormGroup,
} from '@elastic/eui';


export default class extends Component {
  render() {
    return (
      <Layout pageTitle="React Forms Builder" contentTitle="Elastic UI showcase">
        <Fragment>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFieldSearch placeholder="Search..." fullWidth />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton>Search</EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="l" />

          <EuiDescribedFormGroup title={<h3>Single text field</h3>}
          description={
            <Fragment>
              A single text field that can be used to display additional text.
              It can have{' '}
              <EuiLink href="http://www.elastic.co" target="_blank">
                links
              </EuiLink>{' '}
              or any other type of content.
            </Fragment>
          }>
            <EuiFormRow fullWidth label={'Name'}>
                <EuiFieldText
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiFormRow>
          </EuiDescribedFormGroup>

          <EuiFormRow
              label="Works on form rows too"
              fullWidth
              helpText="Note that the fullWidth prop is not passed to the form row's child">
                <EuiRange fullWidth min={0} max={100} name="range" />
            </EuiFormRow>

          <EuiFormRow label="Often useful for text areas" fullWidth>
            <EuiTextArea
              fullWidth
              placeholder="There is a reason we do not make forms ALWAYS 100% width.
                See how this text area becomes extremely hard to read when the individual
                lines get this long? It is much more readable when contained to a scannable max-width."
            />
          </EuiFormRow>
        </Fragment>
      </Layout>
    );
  }

};
