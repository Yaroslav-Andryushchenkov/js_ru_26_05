import BasicStore from './BasicStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default class ArticleStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    this._emitChange()
                    break

                case ADD_COMMENT:
                    this.getById(payload.article_id).comments.push(payload.id)
                    this._emitChange()
                    break


                default:
                    return
            }


        })
    }
}