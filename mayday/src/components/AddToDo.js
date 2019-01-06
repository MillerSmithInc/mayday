import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props){
        super(props); 
    
        this.state = { todo: 'asdf' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState( { todo: event.target.value } );
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.todo);
    }

    render() {
      return (
        <div className="ui container">
            <form onSubmit={this.onSubmit}>
                <input value={this.state.todo} onChange={this.onInputChange} type="text" />
            </form>
        </div>
      );
    }
  }

  export default AddToDo;
