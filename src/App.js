import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ToDO from './toDo/ToDo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDO />
      </div>
    );
  }
}

export default App;
