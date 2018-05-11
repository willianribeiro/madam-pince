import { createReducer } from '../utils'
import { SOME } from './constants'

const initialState = {
}

const templateReducer = createReducer(initialState, {
  [SOME]: (state, action) => ({
    ...state,
  }),

})

export default templateReducer
