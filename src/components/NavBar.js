import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class NavBar extends Component {
  render() {
    return(
      <div>
        <Link to="/signup">Sign Up</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/workouts">Workouts</Link>
        <br/>
        <Link to="/myworkouts">My Workouts</Link>
      </div>
    )
  }
}

export default NavBar
