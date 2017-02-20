import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  componentWillMount() {
    if(this.props.authenticated){
      browserHistory.push('/feature');
    }
  }

  _handleSubmit({ email, password }) {
    this.props.signinUser({ email, password })
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
      const { handleSubmit, fields: { email, password }} = this.props;

      return (
          <form className="form-credentials" onSubmit={handleSubmit(this._handleSubmit.bind(this))}>
            <span className="form_credentials__toggle">New to Vosco?
              <Link className="btn btn-link" to="/signup">Register</Link>
              <span>|</span>
              <Link className="btn btn-link" to="/reset">Forgot Password</Link>
            </span>
            <fieldset className="form-group">
              <input {...email} className="form-control" placeholder="email" />
            </fieldset>
            <fieldset className="form-group">
              <input {...password} type="password" className="form-control" placeholder="password" />
            </fieldset>
            {this._renderAlert()}
            <input className="btn btn-primary" type="submit" value="Sign in" />
          </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error, authenticated: state.auth.authenticated };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
