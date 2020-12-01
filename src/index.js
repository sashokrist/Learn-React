import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    {/* eslint-disable-next-line no-useless-concat */}
  <Hello greeting={'Hello' + 'React ninja'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
