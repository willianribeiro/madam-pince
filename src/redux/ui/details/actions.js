import actionCreators from './action-creators'

// EXPORT THUNKS
export const UIDetailsActions = {
  show,
  hide
}

// THUNKS (SYNC)
function show(bookId) {
  return (dispatch, getState) => {
    dispatch(actionCreators.show(bookId))
  }
}

function hide() {
  return (dispatch, getState) => {
    dispatch(actionCreators.hide())
  }
}
