import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch((err) => {
      dispatch(authError('Bad login info...'));
    });
  }  
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export const signupUser = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER })
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch((err) => {
      dispatch(authError(err.response.data.error));
    });
};

export const fetchMessage = () => (dispatch) => {
  axios.get(ROOT_URL, {
    headers: { authorization: localStorage.getItem('token') }
  })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message,
      });
    });
}