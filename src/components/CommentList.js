import React, { PropTypes } from 'react'
import Comment from './Comment'


function CommentList(props) {
    const { comments } = props

    const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>) : null

    return (
        <ul>
            {commentItems}
        </ul>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList