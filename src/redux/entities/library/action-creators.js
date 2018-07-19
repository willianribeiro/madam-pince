import { UPDATE_LIBRARY } from './constants'

// EXPORT ACTION CREATORS
export default {
  update_library,

}

// ACTION CREATORS
function update_library(library) {
  return {
    type: UPDATE_LIBRARY,
    payload: { library }
  }
}
