import BasicStore from './BasicStore'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break
                
                case LOAD_ALL_COMMENTS + START:
                    this.loading = true
                    break

                case LOAD_ALL_COMMENTS + SUCCESS:
                    response.records ? response.records.forEach(this._add) : null
                    this.loading = false
                    break

                case LOAD_ALL_COMMENTS + FAIL:
                    this.error = error
                    this.loading = false
                    break


                default:
                    return
            }

            this._emitChange()
        })
    }
}