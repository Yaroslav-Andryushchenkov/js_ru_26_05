import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter((article) => article.id != payload.id);
        case ADD_COMMENT:
            let a = Object.assign({}, articles);
            console.dir(a);
            a.forEach((currentValue, index, array) => {
                if (currentValue.id == payload.articleId) currentValue.comments.push(paiload.Id);
            })
            return newArticles;
    }

    return articles
}