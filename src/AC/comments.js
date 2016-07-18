import { ADD_COMMENT } from '../constants'

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: {
            id: Date.now(),
            articleId: articleId,
            text: comment.text,
            user: comment.user
        }
    }
}