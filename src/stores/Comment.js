import BasicStore from './BasicStore'
import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break
                
                case LOAD_COMMENTS + SUCCESS:
                    response.forEach(this._add)
                    break
                
                default:
                    return
            }

            this._emitChange()
        })
    }
}