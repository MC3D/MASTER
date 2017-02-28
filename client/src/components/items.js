import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Items extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    const { items } = this.props;
    if(!items) {
      return <div>Loading ...</div>
    }
    var list = this.props.items.map(function(item, index){
      return (
        <li key={index}>
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </li>
      )
    });
    return (
      <div>
        { list }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { items: state.auth.items }
}

export default connect(mapStateToProps, actions)(Items);
