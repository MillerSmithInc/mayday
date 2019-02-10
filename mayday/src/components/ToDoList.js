<<<<<<< HEAD
import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props); 

    this.state = { list: props.list }
  };

  onDelete(id) {
    var currentList = this.state.list;
    for (var i in currentList) {
      if (currentList[i].id === id) {
        currentList.splice(i, 1);
        this.setState({list: currentList})
      }
    }
  };

  toDoItems() {
    return this.state.list.map((item) => {
      return (
        <li key={item.id}>
          {item.toDo} 
          <i className="x icon x-button" onClick={(id) => this.onDelete(item.id)}></i>
        </li>
      );
    })
  };

  render() {
    return (
      <div className="to-do-list">
        <ol className="ui list">
          {this.toDoItems()}
        </ol>
      </div>
    );
  }
}


=======
import React from 'react';
const ToDoList = () => {
    return <div>
        ToDoList
    </div>;
}
>>>>>>> b0e6601e7baa13a7a5e7a7db3dbd0547a9bac54f
export default ToDoList;