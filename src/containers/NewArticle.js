import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NewArticle extends Component {
    static propTypes = {

    //From redux connect:

    };

    render() {
        return (
            <div>
                <h1>New article page</h1>
            </div>
        )
    }
}

export default connect((state, props) => ({

}), {})(NewArticle)