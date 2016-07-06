import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string
    };

    render() {
        const { article } = this.props
        return <Article article = {article} isOpen = {true}/>
    }
}

export default connect((state, props) => {
    const { id } = props
    return {
        article: state.articles.getIn(['entities', id])
    }
})(ArticleContainer)