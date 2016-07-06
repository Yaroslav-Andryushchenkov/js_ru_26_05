import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE } from '../constants'

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment}
        },
        withRandomId: true
    }
}

export function loadCommentsForArticle(id) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }
}

export function loadCommentsForPage(page) {
    return {
        type: LOAD_COMMENTS_FOR_PAGE,
        payload: { page },
        callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
    }
}