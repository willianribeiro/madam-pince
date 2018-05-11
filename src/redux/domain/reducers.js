import { createReducer } from '../utils'
import { CONFIGURE_LIBRARIES } from './constants'

const initialState = {
  libraries: []
}

const domainReducer = createReducer(initialState, {
  [CONFIGURE_LIBRARIES]: (state, action) => ({
    ...state,
    libraries: action.payload.libraries
  })
})

export default domainReducer
