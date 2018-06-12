import React, { Component } from 'react';
import './ToDoList.css';
class ToDoList extends Component{
  render() {
    return (
      <div className="ToDoList">
      <ul>
      {this.props.items.map(item => (
        <li>{item.text}</li>
      ))}
      </ul>
      </div>
    );
  }
}


export default ToDoList
