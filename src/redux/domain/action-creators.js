import { LOAD_LIBRARIES } from './constants'

// EXPORT ACTION CREATORS
export default {
  load_libraries,
}

// ACTION CREATORS
function load_libraries(libraries) {
  return {
    type: LOAD_LIBRARIES,
    payload: { libraries }
  }
}
