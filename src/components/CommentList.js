import React, { PropTypes, Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const commentItems = comments ? comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>) : null
        const { isOpen } = this.state

        if (!commentItems) return <h4>No comments</h4>
        const label = isOpen ? 'Close' : 'Open'
        const body = isOpen ? <ul> {commentItems} </ul> : ''
        return (
            <div>
                <h4>comments: <a onClick = {this.toggleOpen} href='#'>{label}</a></h4>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen}
        )
    }
}


CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList