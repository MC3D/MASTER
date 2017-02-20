import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  
  render() {
    return (
      <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
             <li className="nav-item">
               <Link className="nav-link" to="/signout">Sign Out</Link>
             </li>
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapStateToProps)(Header);
