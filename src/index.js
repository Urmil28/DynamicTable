import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form.jsx'
import Tabular from './Tabular.jsx'
  

ReactDOM.render(
  <React.StrictMode>
    <Form />
    <Tabular />
  </React.StrictMode>,
  document.getElementById('root')
);
