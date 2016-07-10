import React, {Component, PropTypes} from 'react'

export default class CommentAddForm extends Component {
    state = {
        name: "Test Name",
        text: "Test comment"
    }
    
    handleDataChange(e, prop) {
        const buf = {};
        buf[prop] = e.target.value;
        this.setState(buf);
    }

    handleAddAction = (e) => {
        alert('zzz');
        e.preventDefault();
        e.stopPropagation();
        this.props.onAdd(this.state);
    }
    
    render() {
        return (
            <div>
                <label for="name">Name:</label>
                <br/>
                <input type="text" name="name" id="name" size="50" defaultValue="Test Name" onChange={e => {this.handleDataChange(e,'name')}}></input>
                <br/>
                <label form="text">Text:</label>
                <br/>
                <textarea name="text" id="text" cols="50" defaultValue="Test comment" onChange={e => {this.handleDataChange(e,'text')}}></textarea>
                <br/>
                <input type="Button" name="add_button" defaultValue="Add" onclick={this.handleAddAction}></input>
            </div>
        )
    }
}

CommentAddForm.propTypes = {
    onAdd: PropTypes.func
}
