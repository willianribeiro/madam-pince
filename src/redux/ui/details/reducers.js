import { createReducer } from '../../utils'
import { SHOW, HIDE } from './constants'

const initialState = {
  visible: false,
  bookId: ''
}

const UIDetailsReducer = createReducer(initialState, {
  [SHOW]: (state, action) => ({
    ...state,
    visible: true,
    bookId: action.payload.bookId
  }),

  [HIDE]: (state, action) => initialState,
})

export default UIDetailsReducer
