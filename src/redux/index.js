import { combineReducers } from 'redux'
import domain from './domain'
import entities from './entities'
import ui from './ui'

export default combineReducers({
  domain,
  entities,
  ui
})
