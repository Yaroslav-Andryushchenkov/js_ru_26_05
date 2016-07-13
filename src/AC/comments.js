import { ADD_COMMENT, LOAD_ALL_COMMENTS } from '../constants'
import AppDispatcher from '../dispatcher'
import { loadAllCommentsCall, asyncACFactory } from './webUtils'

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

export const loadAllComments = asyncACFactory(loadAllCommentsCall, LOAD_ALL_COMMENTS)