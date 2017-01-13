import axios from 'axios';
import { browserHistory } from 'react-router';
import  { AUTH_USER } from './types';

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
      });
  }
}
