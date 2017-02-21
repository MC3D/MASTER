import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  _signOut() {
    this.props.userSignout();
  }

  render() {
    return (
      <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
           <ul className="dropdown-menu">
             <li className="nav-item">
               <a href="#" onClick={event => this._signOut()}>Sign Out</a>
             </li>
          </ul>
      </div>
    );
  }
}

export default connect(null, actions)(Header)
