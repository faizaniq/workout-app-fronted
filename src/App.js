import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import Login from './components/Login'


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Login />
        <MainContainer />
      </div>
    );
  }
}

export default App;
