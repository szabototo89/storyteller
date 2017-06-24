import * as React from 'react';
import * as ReactDOM from 'react-dom';

import state from './state';
import Goal from "./models/goal";

import './app.scss';

import Application from './application';

ReactDOM.render(<Application goals={state.goals as Array<Goal>} />, document.getElementById('application'));
 