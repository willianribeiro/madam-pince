import { createReducer } from '../../utils'
import { SET_FILTERED_BOOKS } from './constants'

const initialState = {
  books: []
}

const UIListReducer = createReducer(initialState, {
  [SET_FILTERED_BOOKS]: (state, action) => ({
    ...state,
    books: action.payload.books
  })
})

export default UIListReducer
