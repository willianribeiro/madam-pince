import { createReducer } from '../../utils'
import { CHANGE_SELECTED_LIBRARY_ID } from './constants'

const initialState = {
  selected_library_id: {}
}

const UIGlobalReducer = createReducer(initialState, {
  [CHANGE_SELECTED_LIBRARY_ID]: (state, action) => ({
    ...state,
    selected_library_id: action.payload.library_id
  })
})

export default UIGlobalReducer
