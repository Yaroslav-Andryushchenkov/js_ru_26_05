import { ADD_COMMENT, LOAD_COMMENTS } from '../constants'
import AppDispatcher from '../dispatcher'
import { loadCommentsCall, asyncACFactory } from './webUtils'

export function addComment(articleId, comment) {
    const id = Date.now()
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment, id}
        }
    })
}

export const loadComments = asyncACFactory(loadCommentsCall, LOAD_COMMENTS)