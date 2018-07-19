import actionCreators from './action-creators'
import MadamPinceApi from '../../../services/MadamPinceApi'
import { UIListActions } from '../../ui/list/actions'
import { LibraryActions } from '../../entities/library/actions'
import LocalStorageService from '../../../services/LocalStorageService';

// EXPORT THUNKS
export const BookActions = {
  list,
  list_if_needed,
  get
}

// THUNKS (ASYNC)
function list(libraryId) {
  return (dispatch, getState) => {
    dispatch(actionCreators.list_pending())

    return MadamPinceApi.list_library_entries(libraryId)
      .then(books => {
        const library = getState().entities.library.byId[libraryId]
        const library_id = library.id
        const library_revision = library.revision

        LocalStorageService.save_library({ library_id, library_revision, books })
        dispatch(actionCreators.list_fulfilled(books))
        dispatch(UIListActions.set_filtered_books(books))
      })
      .catch(error => {
        dispatch(actionCreators.list_rejected())
        console.error(error)
      })
  }
}

function list_if_needed(libraryId) {
  return (dispatch, getState) => {
    const local_library = getState().entities.library.byId[libraryId]
    dispatch(actionCreators.list_if_needed_pending())

    MadamPinceApi.get_library(libraryId)
      .then(remote_library => {
        const should_update = _should_update_books(local_library, remote_library)

        if (should_update) {
          dispatch(LibraryActions.update_library(remote_library))
          dispatch(list(libraryId))
        }

        dispatch(actionCreators.list_if_needed_fulfilled())
      })
      .catch(error => {
        dispatch(actionCreators.list_if_needed_rejected())
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

// HELPERS
function _should_update_books(local_library, remote_library) {
  return (
    !_has_local_library(local_library) ||
    _is_library_out_of_date(local_library, remote_library)
  )
}

function _has_local_library(local_library) {
  return !!local_library
}

function _is_library_out_of_date(local_library, remote_library) {
  return local_library.revision !== remote_library.revision
}
