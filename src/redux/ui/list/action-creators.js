import { SET_FILTERED_BOOKS } from './constants'

// EXPORT ACTION CREATORS
export default {
  set_filtered_books
}

// ACTION CREATORS
function set_filtered_books(books) {
  return {
    type: SET_FILTERED_BOOKS,
    payload: { books }
  }
}
