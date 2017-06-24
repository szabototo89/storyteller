import * as React from 'react';
import * as ReactDOM from 'react-dom';

import state from './state';

import './app.scss';

import Application from './application';

ReactDOM.render(<Application {...state} />, document.getElementById('application')); 
 