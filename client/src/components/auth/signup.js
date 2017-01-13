import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props

    return (
      <form>
        <fieldset className="form-group">
          <input className="form-control" {...email} placeholder="email" />
        </fieldset>
        <fieldset className="form-group">
          <input className="form-control" {...password} type="password" placeholder="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
            <input className="form-control" {...passwordConfirm} type="password" placeholder="confirm password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match"
  }

  return errors
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);
