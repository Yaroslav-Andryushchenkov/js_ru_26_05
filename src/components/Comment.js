import React, { PropTypes, Component } from 'react'

class Comment extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { comment } = this.props
        const { isOpen } = this.state

        if (!comment) return 
        const body = isOpen ? <section>{comment.text}</section> : null
        const label = isOpen ? 'Close' : 'Open'

        return (
            <div>
                <h3>{comment.name} <a onClick = {this.toggleOpen} href='#'>{label}</a></h3>
                {body}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
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