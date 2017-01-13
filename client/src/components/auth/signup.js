import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props

    // needs cleanup; DRY
    return (
      <form>
        <fieldset className="form-group">
          <input className="form-control" {...email} placeholder="email" />
          {email.touched && email.error && <div className="error">{email.error}</div>}
      </fieldset>
        <fieldset className="form-group">
          <input className="form-control" {...password} type="password" placeholder="password" />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
            <input className="form-control" {...passwordConfirm} type="password" placeholder="confirm password" />
            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
      </fieldset>
        <button action="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  // DRY; cleanup needed
  if (!formProps.email) {
    errors.email = "Please enter an email"
  }

  if (!formProps.password) {
    errors.password = "Please enter a password"
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = "Please enter a password confirmation";
  }

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
