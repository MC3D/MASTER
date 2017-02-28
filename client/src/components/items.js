import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Items extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    let { items } = this.props;
    if(!items) {
      return <div>Loading ...</div>
    }
    items = this.props.items.map(function(item, index){
      return (
        <div className="col-sm-6 col-md-4" key={ index }>
          <div className="thumbnail">
            <img src={ item.image } alt={item.title} />
            <div className="caption">
              <h3>{ item.title }</h3>
              <p>...</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="row">
        { items }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { items: state.auth.items }
}

export default connect(mapStateToProps, actions)(Items);
