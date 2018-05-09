import { createReducer } from '../../utils'
import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED
} from './constants'

const initialState = {
  entries: [],
  listing: false,
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
})

export default bookReducer
