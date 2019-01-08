import React, { Component } from 'react';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { todo: "" };
  }

  onSearchSubmit = (todo) => {
    console.log(todo)
    console.log("here")
  }
  
  render() {
    return (
      <div className="ui container">
        <AddToDo onSubmit={this.onSearchSubmit}/>
        <ToDoList />
      </div>
    );
  }
}

export default App;
