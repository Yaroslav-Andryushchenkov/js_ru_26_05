import React, { PropTypes, Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openedArticle: null
    }
    render() {
        const { articles } = this.props

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openedArticle}
                openArticle = {this.toggleOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    toggleOpen = id => ev => {
        this.setState({
            openedArticle: (this.state.openedArticle === id ? null : id)
        })
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList