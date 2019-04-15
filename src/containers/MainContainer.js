import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import MyWorkoutContainer from './MyWorkoutContainer'
import WorkoutContainer from './WorkoutContainer'
import SearchBar from '../components/SearchBar'
import AddWorkoutForm from '../components/AddWorkoutForm'
import CreateAccountForm from '../components/CreateAccountForm'
import Home from '../components/Home'
import Login from '../components/Login'

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
    fetch('http://localhost:3001/workouts', {
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

  deleteHandler = (workout) => {
    console.log('deleting')
    fetch(`http://localhost:3001/workouts/${workout.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(() => {
      let newArray = this.state.workouts.filter(wObj => wObj.id !== workout.id)
      this.setState({workouts: newArray})
    })
  }

  filterFunction = () => {
    let search = this.state.workouts.filter(workout => workout.name.includes(this.state.filter))
    let dropdown = this.state.workouts.filter(workout => workout.body_part.includes(this.state.dropdownFilter))
    if (this.state.filter) {
      return (<WorkoutContainer workouts={search} clickHandler={this.addWorkoutHandler} deleteHandler={this.deleteHandler} />)
    }else if (this.state.dropdownFilter) {
      return (<WorkoutContainer workouts={dropdown} clickHandler={this.addWorkoutHandler} deleteHandler={this.deleteHandler}/>)
      console.log(this.state.dropdownFilter)
    }else {
      return (<WorkoutContainer workouts={this.state.workouts} clickHandler={this.addWorkoutHandler} deleteHandler={this.deleteHandler}/>)
    }
  }

  userSubmitHandler = (user) => {
    console.log('e', user)
    fetch('http://localhost:3001/users', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          username: user.username,
          password: user.password}), // body data type must match "Content-Type" header
    })
  }
  // <CreateAccountForm userSubmitHandler={this.userSubmitHandler}/>

  render() {
    return(
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" render={(routeProps) => (<CreateAccountForm {...routeProps} userSubmitHandler={this.userSubmitHandler} />)}/>
        <Route exact path="/workouts" render={(routeProps) => (<AddWorkoutForm {...routeProps} changeHandler={this.searchHandler} submitHandler={this.submitHandler} />)}/>
        <Route exact path="/workouts" render={(routeProps) => (<SearchBar {...routeProps} changeHandler={this.searchHandler} dropdownHandler={this.dropdownHandler} />)}/>
        <Route exact path="/workouts" render={this.filterFunction}/>
        <Route exact path="/myworkouts" render={(routeProps) => (<MyWorkoutContainer {...routeProps} myWorkouts={this.state.myWorkouts} clickHandler={this.removeWorkoutHandler} deleteHandler={this.deleteHandler} />)}/>
      </div>
    )
  }
}


export default MainContainer
