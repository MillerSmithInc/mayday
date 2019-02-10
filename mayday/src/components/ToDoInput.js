import React, { Component } from "react";

class ToDoInput extends Component {
  constructor(props) {
      super(props); 
  
      this.state = { toDo: "" };

      this.onSubmitToDo = this.onSubmitToDo.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
  };

  onInputChange(event) {
      this.setState( { toDo: event.target.value } );
  };

  onSubmitToDo(event) {
    this.props.onSubmitToDo(this.state.toDo);
    this.setState( { toDo: "" } );
  };

  render() {
    return (
      <div className="to-do-input">
        <div className="ui action input">
          <input type="text" 
            placeholder="Enter a to-do..."
            value={this.state.toDo} 
            onChange={(event) => this.onInputChange(event)} />
          <button className="submit-goal ui right labeled icon button" disabled={!this.state.toDo}
            onClick={(event) => this.onSubmitToDo(event)}>
            <i className="calendar plus outline icon"></i>
            Add to-do
          </button>
        </div>
      </div>
    );
  };
};

export default ToDoInput;
