import {
  LIST_PENDING,
  LIST_FULFILLED,
  LIST_REJECTED,
  LIST_IF_NEEDED_PENDING,
  LIST_IF_NEEDED_FULFILLED,
  LIST_IF_NEEDED_REJECTED,
  GET_PENDING,
  GET_FULFILLED,
  GET_REJECTED,
} from './constants'

// EXPORT ACTION CREATORS
export default {
  list_pending,
  list_fulfilled,
  list_rejected,
  list_if_needed_pending,
  list_if_needed_fulfilled,
  list_if_needed_rejected,
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

function list_if_needed_pending() {
  return {
    type: LIST_IF_NEEDED_PENDING
  }
}

function list_if_needed_fulfilled() {
  return {
    type: LIST_IF_NEEDED_FULFILLED
  }
}

function list_if_needed_rejected() {
  return {
    type: LIST_IF_NEEDED_REJECTED
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
