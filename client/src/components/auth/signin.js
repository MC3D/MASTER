import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  _handleSubmit({ email, password }) {
    console.log({ email, password });
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
        <input type="submit" value="Sign in" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
