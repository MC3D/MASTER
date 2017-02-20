import axios from 'axios';
import { browserHistory } from 'react-router';
import  {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE
 } from './types';

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password}) {
  return function(dispatch) {
    // submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // if request is good ...
        // * update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // * save jwt token
        localStorage.setItem('token', response.data.token);
        // * redirect to router '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // if request is bad ...
        // * show error to user
        dispatch(authError('Bad Login Info'));
      });
  }
}

// refactor; DRY principle
export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch((response) => {
        dispatch(authError(response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function userSignout() {
  localStorage.removeItem('token');
  browserHistory.push('/signin');
  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    });
  }
}

// redux promise method
// export function fetchMessage() {
//   const request = axios.get(ROOT_URL, {
//     headers: { authorization: localStorage.getItem('token') }
//   });
//
//   return {
//     type: FETCH_MESSAGE,
//     payload: request
//   };
// }
