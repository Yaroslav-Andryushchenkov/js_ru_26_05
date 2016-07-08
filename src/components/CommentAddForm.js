import React, { PropTypes } from 'react'

function CommentAddForm() {
    return (
        <div>
            <label for="name">Name:</label>
            <br/>
            <input type="text" name="name" id="name" value="" size="50"></input>
            <br/>
            <label form="text">Text:</label>
            <br/>
            <textarea name="text" id="text" cols="50"></textarea>
            <br/>
            <input type="Button" name="add_button" value="Add"></input>
            </div>
    )
}

export default CommentAddForm