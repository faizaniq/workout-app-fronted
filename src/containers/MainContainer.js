import React, { Component } from 'react'
import MyWorkoutContainer from './MyWorkoutContainer'
import WorkoutContainer from './WorkoutContainer'
import SearchBar from '../components/SearchBar'
import AddWorkoutForm from '../components/AddWorkoutForm'


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
    console.log('added')
    this.setState({myWorkouts: [...this.state.myWorkouts, workout]})
  }

  removeWorkoutHandler = (workout) => {
    console.log('removed')
    let updatedMyWorkouts = this.state.myWorkouts.filter(workoutObj => workoutObj.id !== workout.id)
    this.setState({myWorkouts: updatedMyWorkouts})
  }

  searchHandler = (value) => {
    this.setState({filter: value})
  }

  dropdownHandler = (value) => {
    if (value === 'all') {
      this.setState({dropdownFilter: ''})
    }else {
      this.setState({dropdownFilter: value})
    }
  }

  submitHandler = (workout) => {
    console.log('submitting', workout)
    return fetch('http://localhost:3001/workouts', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: workout.name,
          body_part: workout.body_part,
          sets: workout.sets,
          reps: workout.reps}), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses JSON response into native Javascript objects
    .then(workout => this.setState({workouts: [...this.state.workouts, workout]}))
  }

  filterFunction = () => {
    let search = this.state.workouts.filter(workout => workout.name.includes(this.state.filter))
    let dropdown = this.state.workouts.filter(workout => workout.body_part.includes(this.state.dropdownFilter))
    if (this.state.filter) {
      return (<WorkoutContainer workouts={search} clickHandler={this.addWorkoutHandler} />)
    }else if (this.state.dropdownFilter) {
      return (<WorkoutContainer workouts={dropdown} clickHandler={this.addWorkoutHandler} />)
      console.log(this.state.dropdownFilter)
    }else {
      return (<WorkoutContainer workouts={this.state.workouts} clickHandler={this.addWorkoutHandler} />)
    }
  }

  render() {
    return(
      <div>
        <SearchBar changeHandler={this.searchHandler} dropdownHandler={this.dropdownHandler}/>
        <MyWorkoutContainer myWorkouts={this.state.myWorkouts} clickHandler={this.removeWorkoutHandler} />
        <AddWorkoutForm submitHandler={this.submitHandler}/>
        {this.filterFunction()}
      </div>
    )
  }
}


export default MainContainer
