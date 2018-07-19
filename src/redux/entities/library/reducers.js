import { createReducer } from '../../utils'
import { UPDATE_LIBRARY } from './constants'

const initial_state = {
  byId: {}
}

const LibraryReducer = createReducer(initial_state, {
  [UPDATE_LIBRARY]: (state, action) => ({
    ...state,
    byId: {
      ...state.byId,
      [action.payload.library.id]: action.payload.library
    }
  })
})

export default LibraryReducer
