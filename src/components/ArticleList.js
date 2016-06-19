import React, { PropTypes, Component } from 'react'
import Article from './Article'
import openArticle from '../decorators/openArticle'

function ArticleList(props)  {

    const { articles } = props
    const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === props.openedArticle}
                openArticle = {props.toggleOpen(article.id)}
            />
        </li>)

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

ArticleList.propTypes = {
    openedArticle: PropTypes.number,
    articles: PropTypes.array,
    toggleOpen: PropTypes.func
}

export default openArticle(ArticleList)