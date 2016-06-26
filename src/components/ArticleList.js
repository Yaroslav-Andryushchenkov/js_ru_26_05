import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DayPicker from 'react-day-picker'
import {DateUtils} from 'react-day-picker'

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

    state = {
        selected: null,
        fromDate: null,
        toDate: null
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
        const { articles, isOpen, openItem } = this.props

        articles.forEach((item, i, arr) => (arr[i].date = new Date(item.date)))
        const filteredArticles = articles.filter((item, i, arr) => {return (this.state.fromDate ? (item.date.valueOf() > this.state.fromDate.valueOf()) : true) &&
                        (this.state.toDate ? (item.date.valueOf() < this.state.toDate.valueOf()) : true)})
        const articleItems = filteredArticles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                openArticle = {openItem(article.id)}
            />
        </li>)

        const options = filteredArticles.map((article) => ({label: article.title, value: article.id}))

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                <Select
                    options = {options}
                    onChange = {this.handleChange}
                    value= {this.state.selected}
                    multi = {true}
                />
                From: <DayPicker
                        onDayClick = {(e,day)=>{this.setState({fromDate: day})}}
                        selectedDays = {day => DateUtils.isSameDay(day, this.state.fromDate)}
                        />
                To: <DayPicker
                        onDayClick = {(e,day)=>{this.setState({toDate: day})}}
                        selectedDays = {day => DateUtils.isSameDay(day, this.state.toDate)}
                    />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,

    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)