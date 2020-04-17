import React from 'react';
import './App.css';

import { createStore } from  'redux';
import { Provider } from 'react-redux';

//import thunk from 'redux-thunk';
import Spacex from './SpaceX';
import {rootReducer} from './reducers';

const store = createStore(rootReducer);

export default function App() {
  return (
    //Wrap the div in your Provider and insert your store
    <Provider store={store}>
    <div className='App'>
      <h1>SpaceX Vehicles</h1>
      //Insert SpaceX Component here
    </div>
    </Provider>
  )
}
