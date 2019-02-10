<<<<<<< HEAD
import React, { Component } from "react";

import ToDoInput from "./components/ToDoInput";
=======
import React, { Component } from 'react';
import AddToDo from "./components/AddToDo";
>>>>>>> b0e6601e7baa13a7a5e7a7db3dbd0547a9bac54f
import ToDoList from "./components/ToDoList";

class App extends Component {

  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = { toDoList: [] };
  };
  
  addToDo = (inputTodo) => {

    var currentToDoList = this.state.toDoList;
    var thisToDo = { toDo: inputTodo, id: Date.now() };

    currentToDoList.push(thisToDo);
    this.setState({
      toDoList: currentToDoList
    });
  };

  render() {
    return (
      <div className="App">
        <div className="toDo-wrapper">
          <ToDoInput onSubmitToDo={this.addToDo}/>
          <ToDoList onDeleteItem={this.id} list={this.state.toDoList}/>
        </div>
=======
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
>>>>>>> b0e6601e7baa13a7a5e7a7db3dbd0547a9bac54f
      </div>
    );
  };
};

export default App;
