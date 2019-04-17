import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App dataProps="Hello i'm react !" />, document.getElementById('root'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);