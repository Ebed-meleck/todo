import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_TODO, payload: { title: 'demo' } });

store.dispatch({ type: ADD_TODO, payload: { title: 'demo' } });
store.dispatch({ type: ADD_TODO, payload: { title: 'demo' } });
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
