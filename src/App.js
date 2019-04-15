import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import CreateAccountForm from './components/CreateAccountForm'


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default App;
