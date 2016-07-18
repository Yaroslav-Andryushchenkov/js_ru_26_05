import { createStore } from 'redux'
import reducer from '../reducer'
import { normalizedComments } from '../fixtures'

const store = createStore(reducer)

window.store = store

export default store