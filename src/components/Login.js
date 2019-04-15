import React, { Component } from 'react'

class Login extends Component {

  state ={
    name: '',
    username: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.userSubmitHandler(this.state)
    this.setState(
      {name: '',
       username: '',
       password: ''})
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="Username"/>
          <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
          <button type="submit" value="submit">Sign In</button>
        </form>
      </div>
    )
  }
}


export default Login
