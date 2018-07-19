import { createReducer } from '../../utils'
import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED,
  LIST_IF_NEEDED_PENDING,
  LIST_IF_NEEDED_FULFILLED,
  LIST_IF_NEEDED_REJECTED,
  GET_PENDING,
  GET_FULFILLED,
  GET_REJECTED,
} from './constants'

const initialState = {
  entries: [],
  entry: {},
  listing: false,
  listing_if_needed: false,
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

  [LIST_IF_NEEDED_PENDING]: (state, action) => ({
    ...state,
    listing_if_needed: true
  }),

  [LIST_IF_NEEDED_FULFILLED]: (state, action) => ({
    ...state,
    listing_if_needed: false
  }),

  [LIST_IF_NEEDED_REJECTED]: (state, action) => ({
    ...state,
    listing_if_needed: false
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
