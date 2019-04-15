import React, { Component } from 'react'

class SearchBar extends Component {

  searchHandler = (e) => {
    this.props.changeHandler(e.target.value)
  }

  dropdownHandler = (e) => {
    this.props.dropdownHandler(e.target.value)
  }


  render() {
    return(
      <div>
        <input placeholder="Search" onChange={this.searchHandler}/>
        <select name="Focus Areas" onChange={this.dropdownHandler}>
          <option value="all">All</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="shoulders">Shoulders</option>
          <option value="quads">Quads</option>
          <option value="traps">Traps</option>
        </select>
      </div>
    )
  }
}


export default SearchBar
