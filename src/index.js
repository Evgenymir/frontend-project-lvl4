// @ts-check
/* eslint react/jsx-filename-extension:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';

// import faker from 'faker';
import gon from 'gon';
import App from './App.jsx';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

console.log('it works!'); // eslint-disable-line no-console
console.log('gon', gon); // eslint-disable-line no-console

ReactDOM.render(
  <App channels={gon.channels} />,
  document.getElementById('chat'),
);
