import { SHOW, HIDE } from './constants'

// EXPORT ACTION CREATORS
export default {
  show,
  hide
}

// ACTION CREATORS
function show(bookId) {
  return {
    type: SHOW,
    payload: { bookId }
  }
}

function hide() {
  return {
    type: HIDE
  }
}

