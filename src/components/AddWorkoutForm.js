import React, { Component } from 'react'

class AddWorkoutForm extends Component {

  state = {
    name: '',
    body_part: [''],
    sets: '',
    reps: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({
      name: '',
      body_part: '',
      sets: '',
      reps: ''
    })
  }

  render() {
    return(
      <div>
        <h3>Create Workout</h3>
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.changeHandler} value={this.state.name} name='name' placeholder="Workout Name"/>
          <input type='text' onChange={this.changeHandler} value={this.state.body_part} name='body_part' placeholder="Focus Areas"/>
          <input type='text' onChange={this.changeHandler} value={this.state.sets} name='sets' placeholder="Sets"/>
          <input type='text' onChange={this.changeHandler} value={this.state.reps } name='reps' placeholder="Reps"/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}


export default AddWorkoutForm
