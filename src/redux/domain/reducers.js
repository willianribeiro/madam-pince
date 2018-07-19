import { createReducer } from '../utils'
import { LOAD_LIBRARIES } from './constants'

const initialState = {
  libraries: []
}

const domainReducer = createReducer(initialState, {
  [LOAD_LIBRARIES]: (state, action) => ({
    ...state,
    libraries: action.payload.libraries
  })
})

export default domainReducer
