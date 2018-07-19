import actionCreators from './action-creators'

// EXPORT THUNKS
export const LibraryActions = {
  update_library
}

// THUNKS (SYNC)
function update_library(library) {
  return (dispatch, getState) => {
    dispatch(actionCreators.update_library(library))
  }
}
