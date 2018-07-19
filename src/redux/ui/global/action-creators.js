import { CHANGE_SELECTED_LIBRARY_ID } from './constants'

// EXPORT ACTION CREATORS
export default {
  change_selected_library_id
}

// ACTION CREATORS
function change_selected_library_id(library_id) {
  return {
    type: CHANGE_SELECTED_LIBRARY_ID,
    payload: { library_id }
  }
}
