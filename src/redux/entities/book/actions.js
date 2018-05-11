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
    const fields = getState().domain.libraries.filter(lib => lib.id === libraryId)[0].fields
    dispatch(actionCreators.list_pending())

    return MadamPinceApi.list_entries(libraryId, fields)
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

function get(id, libraryId = 'jQSwnoG2p') {
  return (dispatch, getState) => {
    dispatch(actionCreators.get_pending())

    return MadamPinceApi.get_entry(id, libraryId)
      .then(book => {
        dispatch(actionCreators.get_fulfilled(book))
      })
      .catch(error => {
        dispatch(actionCreators.get_rejected())
        console.error(error)
      })
  }
}
