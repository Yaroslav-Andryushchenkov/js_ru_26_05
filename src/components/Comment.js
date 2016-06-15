import React, { PropTypes } from 'react'

function Comment(props) {

    const { comment } = props

    if (!comment) return

    return (
        <div>
            <h3>{comment.name} {comment.name} </h3>
            <section>{comment.text}</section>
        </div>
    )
}


Comment.propTypes = {
    article: PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired
    }),
    options: PropTypes.object
}

export default Comment