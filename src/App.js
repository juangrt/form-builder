import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import './components/json_schema_form.css';
import 'react-json-form-engine/dist/css/styles.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DefaultForm from './components/defaultForm';
import DefaultFormWithCustomComponents from './components/defaultFormWithCustomComponents';
import ReactJsonSchemaSupplementalForm from './components/reactJsonSchema';
import ReactJsonFormEngineSupplementalForm from './components/reactJsonFormEngine';
import EmbededForm from './components/embeded';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Json Schema Example</Link>
            </li>
            <li>
              <Link to="/customComponents">Json Schema Example (Custom Components)</Link>
            </li>
            <li>
              <Link to="/supFormJSchema">Supplemental Form (Json Schema)</Link>
            </li>
            <li>
              <Link to="/supFormEngine">Supplemental Form (Form Engine)</Link>
            </li>
            <li>
              <Link to="/embeded">Embeded (Formstack)</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/embeded">
            <EmbededForm />
          </Route>
          <Route path="/supFormEngine">
            <ReactJsonFormEngineSupplementalForm />
          </Route>
          <Route path="/supFormJSchema">
            <ReactJsonSchemaSupplementalForm />
          </Route>
          <Route path="/customComponents">
            <DefaultFormWithCustomComponents />
          </Route>
          <Route path="/">
            <DefaultForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
