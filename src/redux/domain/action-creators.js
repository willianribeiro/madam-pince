import { CONFIGURE_LIBRARIES } from './constants'

// EXPORT ACTION CREATORS
export default {
  configure_libraries,
}

// ACTION CREATORS
function configure_libraries(libraries) {
  return {
    type: CONFIGURE_LIBRARIES,
    payload: { libraries }
  }
}
