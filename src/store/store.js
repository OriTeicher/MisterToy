import { createStore } from 'redux'
import toyReducer from './reducers/toy.reducer'

const store = createStore(toyReducer)

export default store