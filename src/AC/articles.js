import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}

export function addComment(comment) {
    const action = {
        type: ADD_COMMENT,
        payload: Object.assign({id: Date.now()},comment)
    }
    AppDispatcher.dispatch(action)
}