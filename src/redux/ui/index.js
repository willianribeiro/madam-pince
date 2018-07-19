import { combineReducers } from 'redux'
import details from './details'
import global from './global'
import list from './list'

export default combineReducers({
  details,
  global,
  list
})
