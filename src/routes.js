import React from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import history from './history'
import Root from './containers/AppContainer'
import ArticlePage from './RouteHandlers/ArticlePage'

import Counter from './containers/Counter'
import ArticleList from './containers/ArticleList'
import CommentPagination from './containers/CommentPagination'
import CommentPage from './containers/CommentPage'
import NewArticlePage from './containers/NewArticle'
import NotFoundPage from './components/NotFoundPage'
import SelectArticle from './components/SelectArticle'

export default (
    <Router history = {history}>
        <Redirect from = "/" to = "/articles" />
        {/*<Redirect from = "/comments" to="/comments/1" />*/}
        <Route path = "/" component = {Root}>
            <Route path = "counter" component = {Counter} />
            <Route path = "articles" component = {ArticleList} >
                <IndexRoute component = {SelectArticle} />
                <Route path = "new" component = {NewArticlePage}
                    onEnter = {(_, replace) => {replace('/articles')}}
                    onLeave = {() => console.log('leaving route /articles/new')}
                />
                <Route path = ":id" component = {ArticlePage} />
                <Route path = "/show/:id" component = {ArticlePage} />
            </Route>
            <Route path = "comments" component = {CommentPagination}>
                <IndexRedirect to = "1"/>
                <Route path = ":page" component = {CommentPage} />
            </Route>
        </Route>
        <Route path = "*" component = {NotFoundPage} />
    </Router>
)