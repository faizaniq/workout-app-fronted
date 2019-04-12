import React, { Component } from 'react'
import MyWorkoutContainer from './MyWorkoutContainer'
import WorkoutContainer from './WorkoutContainer'
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {

  state = {
    workouts: [],
    myWorkouts: [],
    filter: '',
    dropdownFilter: ''
  }

  componentDidMount(){
    fetch('http://localhost:3001/workouts')
    .then(res => res.json())
    .then(workouts => this.setState({workouts}))
  }

  addWorkoutHandler = (workout) => {
    console.log('cleeekeedd')
    this.setState({myWorkouts: [...this.state.myWorkouts, workout]})
  }

  removeWorkoutHandler = (workout) => {
    console.log('cleeked again')
    let updatedMyWorkouts = this.state.myWorkouts.filter(workoutObj => workoutObj.id !== workout.id)
    this.setState({myWorkouts: updatedMyWorkouts})
  }

  searchHandler = (value) => {
    this.setState({filter: value})
  }

  dropdownHandler = (value) => {
    this.setState({filter: value})
  }

  render() {
    let search = this.state.workouts.filter(workout => workout.name.includes(this.state.filter))
    let dropdown = this.state.workouts.filter(workout => workout.body_part.includes(this.state.dropdownFilter))
    return(
      <div>
        <SearchBar changeHandler={this.searchHandler} dropdownHandler={this.dropdownHandler}/>
        <MyWorkoutContainer myWorkouts={this.state.myWorkouts} clickHandler={this.removeWorkoutHandler} />
        <WorkoutContainer workouts={this.state.filter? search: this.state.workouts} clickHandler={this.addWorkoutHandler} />
      </div>
    )
  }
}


export default MainContainer
