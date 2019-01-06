import React, { Component } from 'react';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { todo: "" };
  }
  
  render() {
    return (
      <div className="App">
        <AddToDo />
        <ToDoList />
      </div>
    );
  }
}

export default App;
