import React, { Component } from 'react';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = { todo: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ todo: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.todo);
    }

    render() {
        return (
                <div className="ui segmant" style={{width: '80%'}}>
                    <div className="field">
                        <form className="ui form" onSubmit={this.onFormSubmit}>
                            <input value={this.state.todo} onChange={this.onInputChange} type="text" />
                            <div class="ui teal button">Add ToDo</div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default AddToDo;
