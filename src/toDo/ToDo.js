import React, { Component } from 'react';
import ToDoList from './../todoList/ToDoList';
import './ToDo.css';

class ToDO extends Component{
  constructor(props) {
    super(props);
    this.state = {  items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="ToDo">
        <h3>TODO</h3>
        <ToDoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
                What need to be Done?
          </label>
          <input id="new-todo"
           onChange={this.handleChange}
           value={this.state.text}
          />
          <button>
          Add#{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
  handleChange(e) {

    this.setState({ text: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
  
    if (!this.state.text.length) {
     return;
   }
    const newItem = {
      text: this.state.text,
    //  id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

export default ToDO;
