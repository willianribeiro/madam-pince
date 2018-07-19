import actionCreators from './action-creators'

// EXPORT THUNKS
export const DomainActions = {
  load_libraries,
}

// THUNKS (SYNC)
function load_libraries(libraries) {
  return (dispatch, getState) => {
    dispatch(actionCreators.load_libraries(libraries))
  }
}
