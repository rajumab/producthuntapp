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
        <div className="container">
          <span className="searchIcon_11e88"><svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M9.383 10.347a5.796 5.796 0 1 1 .965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 1 0 0-8.863 4.432 4.432 0 0 0 0 8.863z" fill="#BBB" fill-rule="evenodd"></path></svg></span>
          <input className="input_277cf"
              value={this.state.searchText}
              onChange={event => this.onSearchTextChange(event.target.value)}  />
        </div>
      </div>
    )
  }

  onSearchTextChange(searchText){
    this.setState({
        searchText
    });

    this.props.onSearchChange(searchText);
  }
}
