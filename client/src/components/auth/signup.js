import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  componentWillMount() {
    if(this.props.authenticated){
      browserHistory.push('/welcome');
    }
  }

  _handleSubmit(formProps) {
    // call action creator to sign up user
    this.props.signupUser(formProps);
  }

  _renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props

    // needs cleanup; DRY
    return (
      <form onSubmit={handleSubmit(this._handleSubmit.bind(this))}>
        <span className="form_credentials__toggle">Already have an account?<Link className="btn btn-link" to="/signin">Signin</Link></span>
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
        {this._renderAlert()}

        <input className="btn btn-primary" type="submit" value="Register" />
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
