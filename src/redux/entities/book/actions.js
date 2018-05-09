import actionCreators from './action-creators'
import MadamPinceApi from '../../../services/MadamPinceApi'

// EXPORT THUNKS
export const bookActions = {
  list,
}

// THUNKS (ASYNC)
function list(libraryId = 'jQSwnoG2p') {
  return (dispatch, getState) => {
    dispatch(actionCreators.list_pending())

    return MadamPinceApi.list_entries(libraryId)
      .then(books => {
        dispatch(actionCreators.list_fulfilled(books))
      })
      .catch(error => {
        dispatch(actionCreators.list_rejected())
        console.error(error)
      })
  }
}
