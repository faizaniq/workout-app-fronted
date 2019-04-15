import React, { Component } from 'react'
import WorkoutCard from '../components/WorkoutCard'


class MyWorkoutContainer extends Component {

  render() {
    console.log(this.props.myWorkouts)
    let myWorkoutArray = this.props.myWorkouts.map(workout => <WorkoutCard key={workout.id} workout={workout} clickHandler={this.props.clickHandler} deleteHandler={this.props.deleteHandler}/>)
    return(
      <div>
        <h1>My Workouts</h1>
        {myWorkoutArray}
      </div>
    )
  }
}


export default MyWorkoutContainer
