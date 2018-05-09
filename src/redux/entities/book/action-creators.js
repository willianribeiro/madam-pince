import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED
} from './constants'

// EXPORT ACTION CREATORS
export default {
  list_pending,
  list_fulfilled,
  list_rejected,
}

// ACTION CREATORS
function list_pending() {
  return {
    type: LIST_PENDING
  }
}

function list_fulfilled(books) {
  return {
    type: LIST_FULFILLED,
    payload: { books }
  }
}

function list_rejected() {
  return {
    type: LIST_REJECTED
  }
}
