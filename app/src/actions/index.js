import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => dispatch => {
  //dispatch FETCH_DATA
  dispatch({
    type: FETCH_DATA
  });
  setTimeout(() => {
    axios
      .get(
        "https://api.spacexdata.com/v3/rockets"
      )
      .then(res => {
        //dispatch transition to DATA_SUCCESS
        console.log("AJM: actions/index/js: axios.then: res: ", res);
        let rocketData = res.data.map(rocket => {
          return{
            image: rocket.flickr_images[0],
            rocketName: rocket.rocket_name,
            description: rocket.description
          };
        });
        dispatch({ type: DATA_SUCCESS, payload: [...rocketData].reverse() });
      })
      .catch(err => {
        //dispatch transition to DATA_ERROR
        console.log("ajm: actions/indes.js: axios.catch: err: ", err);
        dispatch({ type: DATA_ERROR, payload: err});
      })
  }, 1500);
};
