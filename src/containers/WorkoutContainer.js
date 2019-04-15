import React, { Component } from 'react'
import WorkoutCard from '../components/WorkoutCard'


class WorkoutContainer extends Component {

  render() {
    let workoutArray = this.props.workouts.map(workout => <WorkoutCard key={workout.id} workout={workout} clickHandler={this.props.clickHandler} deleteHandler={this.props.deleteHandler}/>)
    return(
      <div>
        <h1>All Workouts</h1>
        {workoutArray}
      </div>
    )
  }
}


export default WorkoutContainer
