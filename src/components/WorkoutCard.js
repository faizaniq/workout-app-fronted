import React, { Component } from 'react'

class WorkoutCard extends Component {
  render() {
    // <h3>Focus Area: {this.props.workout.body_part.length > 1? this.props.workout.body_part.join(' ,'): this.props.workout.body_part}</h3>
    // let bodyPart = this.props.workout.body_part.join(', ')
    return(
      <div>
        <h1>{this.props.workout.name}</h1>
        <h3>Focus Area: {this.props.workout.body_part}</h3>
        <h3>Sets: {this.props.workout.sets}</h3>
        <h3>Reps: {this.props.workout.reps}</h3>
        <button onClick={()=> this.props.clickHandler(this.props.workout)}>Add</button><button onClick={()=> this.props.deleteHandler(this.props.workout)}>Delete</button>
      </div>
    )
  }
}


export default WorkoutCard
