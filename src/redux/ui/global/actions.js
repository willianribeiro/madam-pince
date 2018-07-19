import actionCreators from './action-creators'

// EXPORT THUNKS
export const UIGlobalActions = {
  change_selected_library_id
}

// THUNKS (SYNC)
function change_selected_library_id(library_id) {
  return (dispatch, getState) => {
    dispatch(actionCreators.change_selected_library_id(library_id))
  }
}
