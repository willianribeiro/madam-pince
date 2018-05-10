import { createReducer } from '../../utils'
import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED,
  GET_PENDING,
  GET_FULFILLED,
  GET_REJECTED,
} from './constants'

const initialState = {
  entries: [],
  entry: {},
  listing: false,
  getting: false,
}

const bookReducer = createReducer(initialState, {
  [LIST_PENDING]: (state, action) => ({
    ...state,
    listing: true
  }),

  [LIST_FULFILLED]: (state, action) => ({
    ...state,
    entries: action.payload.books,
    listing: false
  }),

  [LIST_REJECTED]: (state, action) => ({
    ...state,
    listing: false
  }),

  [GET_PENDING]: (state, action) => ({
    ...state,
    getting: true
  }),

  [GET_FULFILLED]: (state, action) => ({
    ...state,
    entry: action.payload.book,
    getting: false
  }),

  [GET_REJECTED]: (state, action) => ({
    ...state,
    getting: false
  }),

})

export default bookReducer
