import React, { Component } from 'react'

class CreateAccountForm extends Component {

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
        <h1>Create Account</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} placeholder="Name"/>
          <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="Username"/>
          <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default CreateAccountForm
