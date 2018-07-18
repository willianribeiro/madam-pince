import actionCreators from './action-creators'
import MadamPinceApi from '../../../services/MadamPinceApi'
import { UIListActions } from '../../ui/list/actions';

// EXPORT THUNKS
export const BookActions = {
  list,
  get
}

// THUNKS (ASYNC)
function list(libraryId) {
  return (dispatch, getState) => {
    dispatch(actionCreators.list_pending())

    return MadamPinceApi.list_library_entries(libraryId)
      .then(books => {
        dispatch(actionCreators.list_fulfilled(books))
        dispatch(UIListActions.set_filtered_books(books))
      })
      .catch(error => {
        dispatch(actionCreators.list_rejected())
        console.error(error)
      })
  }
}

function get(entryId, libraryId) {
  return (dispatch, getState) => {
    dispatch(actionCreators.get_pending())

    return MadamPinceApi.get_library_entry(entryId, libraryId)
      .then(book => {
        dispatch(actionCreators.get_fulfilled(book))
      })
      .catch(error => {
        dispatch(actionCreators.get_rejected())
        console.error(error)
      })
  }
}
