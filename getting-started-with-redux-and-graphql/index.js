import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { queryReducer } from "./app/reducers/reducers.js";
import thunkMiddleware from 'redux-thunk'

import { QueryContainer } from "./app/components/Query.js";

//This applcation has no "containers". They are sucked into smart components at component level with connect
//Multiple components can be inkected here.
const Main = () => {
  return (
    <div>
      <QueryContainer />
      <h2>Hey</h2>
    </div>
  )
};

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(queryReducer)}>
    <Main />
  </Provider>,
  document.getElementById('example')
);
