import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class search extends Component {
  state = {
    searchText : ''
  }

  static propTypes = {
    onSearchChange : PropTypes.func
  }

  render() {
    return (
      <div className="header_0a28e">
          <input className="input_277cf"
              value={this.state.searchText}
              onChange={event => this.onSearchTextChange(event.target.value)}  />
      </div>
    )
  }

  onSearchTextChange(searchText){
    console.log('Search Text', searchText);

    this.setState({
        searchText
    });

    this.props.onSearchChange(searchText);
  }
}
