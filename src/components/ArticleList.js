import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import Article from './Article'
import Chart from './Chart'
//import Filters from './Filters'
import oneOpen from '../decorators/oneOpen'

class ArticleList extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const { articles, isOpen, openItem } = this.props

        const articleItems = articles.map((article) => <li key={article.get('id')}>
            <Link to={`/articles/${article.get('id')}`}
                  activeClassName = "active"
                  activeStyle = {{color: 'red'}}
            >{article.get('title')}</Link>
        </li>)

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <div onClick = {this.redirectToRandomArticle}>
                    Random article
                </div>
                <Chart ref="chart" />
                {/*<Filters />*/}
            </div>
        )
    }

    redirectToRandomArticle = () => {
        const { articles } = this.props
        const id = articles.getIn([Math.floor(Math.random() * articles.size), 'id'])
        this.context.router.push(`/articles/${id}`)
    }

}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired,

    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)