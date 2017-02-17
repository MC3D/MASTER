import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // must declare contextTypes to access props on context
    // get access to this.context.router
    static contextTypes = {
      router: React.PropTypes.object
    }

    // if user is not authenticated, navigate to home route
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/signin');
      }
    }

    // nextProps represents next set of props component will be rendered with
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
