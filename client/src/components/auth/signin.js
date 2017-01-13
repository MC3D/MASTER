import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
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
      <form onSubmit={handleSubmit(this._handleSubmit.bind(this))}>
        <fieldset className="form-group">
          <input {...email} className="form-control" placeholder="email" />
        </fieldset>
        <fieldset className="form-group">
          <input {...password} type="password" className="form-control" placeholder="password" />
        </fieldset>
        {this._renderAlert()}
        <input type="submit" value="Sign in" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
