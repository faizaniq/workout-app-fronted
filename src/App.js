import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    workouts: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/workouts')
    .then(res => res.json())
    .then(workouts => this.setState({workouts}))
  }


  render() {
    console.log(this.state.workouts )
    return (
      <h1>hello</h1>
    );
  }
}

export default App;
