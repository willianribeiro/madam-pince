import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED,
  GET_PENDING,
  GET_FULFILLED,
  GET_REJECTED,
} from './constants'

// EXPORT ACTION CREATORS
export default {
  list_pending,
  list_fulfilled,
  list_rejected,
  get_pending,
  get_fulfilled,
  get_rejected,
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

function get_pending() {
  return {
    type: GET_PENDING
  }
}

function get_fulfilled(book) {
  return {
    type: GET_FULFILLED,
    payload: { book }
  }
}

function get_rejected() {
  return {
    type: GET_REJECTED
  }
}
