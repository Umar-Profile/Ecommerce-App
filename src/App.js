import './App.css';
import React from 'react';
import Router from '../src/Routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store = {Store}>
    <div className="App">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
