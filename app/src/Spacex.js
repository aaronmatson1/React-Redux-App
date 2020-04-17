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
              {props.rocketData.map(rocket => {
                return (
                  <tr>
                    <td>{rocket.flicker_images[0]}</td>
                    <td>{rocket.rocketName}</td>
                    <td>{rocket.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    rocketData: state.rocketData,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchData }
)(SpaceX);
