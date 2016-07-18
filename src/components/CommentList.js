import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { getRelation } from '../store/utils'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };
    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
            </div>
        )
    }
    
    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    getList() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        const comments = getRelation(article, 'comments')
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        if (comments.includes(undefined)) return <h3>Loading comments...</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div>
            <ul>{items}</ul>
            <NewCommentForm articleId={article.id} />
        </div>
    }
}

export default toggleOpen(CommentList)