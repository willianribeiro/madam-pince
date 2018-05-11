import actionCreators from './action-creators'
// EXPORT THUNKS
export const UIListActions = {
  set_filtered_books
}

// THUNKS (SYNC)
function set_filtered_books(books) {
  return (dispatch, getState) => {
    dispatch(actionCreators.set_filtered_books(books))
  }
}
