import actionCreators from './action-creators'

// EXPORT THUNKS
export const UIDetailsActions = {
  some,
}

// THUNKS (SYNC)
function some(some_parameter) {
  return (dispatch, getState) => {
    dispatch(actionCreators.some(some_parameter))
  }
}
