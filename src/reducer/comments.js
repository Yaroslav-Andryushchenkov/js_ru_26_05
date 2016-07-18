import { normalizedComments } from '../fixtures'

export default (comments = normalizedComments, action) => {
    const { type, payload, response, error } = action
    return comments
}