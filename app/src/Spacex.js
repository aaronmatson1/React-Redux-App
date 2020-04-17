import React from 'react';
import {connect} from 'react-redux';

import { fetchData } from './actions';

const SpaceX = props => {
  return (
    <div id="spacexData">
      {props.isLoading ? (
        <div>Data Loading</div>
      ) : (
        <div>
          <button onClick={() => props.fetchData()}>See the Ships!</button>
          {props.error && (
            <div style={{color:"red"}}>*There was an error loading the Data*</div>
          )}
          <table>
            <tbody>
              {props.}//Pausing here to set up the actions file, and importing my data from the API
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
