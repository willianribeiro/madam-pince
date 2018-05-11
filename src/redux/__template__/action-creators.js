import { SOME } from './constants'

// EXPORT ACTION CREATORS
export default {
  some,

}

// ACTION CREATORS
function some(some_parameter) {
  return {
    type: SOME,
    payload: { some_parameter }
  }
}
