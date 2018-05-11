import actionCreators from './action-creators'

// EXPORT THUNKS
export const DomainActions = {
  configure_libraries,
}

// THUNKS (SYNC)
function configure_libraries(libraries) {
  return (dispatch, getState) => {
    dispatch(actionCreators.configure_libraries(libraries))
  }
}
