import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Hello from './App.js';
// import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Nick"
  personAge: 24
}

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
);
// registerServiceWorker();
