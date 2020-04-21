import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SpaceX from './SpaceX';

import { rootReducer } from './reducers';

const store = createStore(rootReducer);

export default function App() {
  return (
    //Wrap the div in your Provider and insert your store
    <Provider store={store}>
    <div className='App'>
      <h1>SpaceX Vehicles</h1>
      <SpaceX />
    </div>
    </Provider>
  )
}
