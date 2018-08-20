import actionCreators from './action-creators'
import MadamPinceApi from '../../../services/MadamPinceApi'
import { UIListActions } from '../../ui/list/actions'
import { LibraryActions } from '../../entities/library/actions'

// EXPORT THUNKS
export const BookActions = {
  list,
  list_if_needed,
  get,
  reset_entry
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
        book.fields = _remove_not_allowed_fieds(book.fields)
        book.fields = _format_dates(book.fields)
        dispatch(actionCreators.get_fulfilled(book))
      })
      .catch(error => {
        dispatch(actionCreators.get_rejected())
        console.error(error)
      })
  }
}

// THUNKS (SYNC)
function reset_entry() {
  return (dispatch, getState) => {
    dispatch(actionCreators.reset_entry())
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

function _remove_not_allowed_fieds(fields) {
  const fieldsToRemove = [
    'Emprestado para',
    'checkNoPicture',
    'checkLendInconsistence',
    'checkCodigoInconsistence'
  ]

  return fields.filter(field => {
    const shouldRemoveField = fieldsToRemove.some(fieldToRemove => fieldToRemove === field.name)
    return shouldRemoveField
      ? false
      : true
  })
}

function _format_dates(fields) {
  return fields.map(field => {
    if (_should_format_date(field.name, field.value)) {
      return {
        ...field,
        value: new Date(field.value).toLocaleDateString('pt-br')
      }
    }
    return field
  })
}

function _should_format_date(fieldName, fieldValue) {
  const date_fields = ['Data de publicação', 'Data de empréstimo']

  return (
    fieldValue &&
    (fieldName === date_fields[0] || fieldName === date_fields[1])
  )
}

//toLocaleDateString('pt-br')
