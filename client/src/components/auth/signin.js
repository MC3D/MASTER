import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {
    return(
      <form>
        <fieldset className="form-group">
          <input placeholder="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <input placeholder="password" className="form-control" />
        </fieldset>
        <input type="submit" value="Sign In">
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
