import MementoApi from './MementoApi'
import {
  USER_TOKEN,
  LIBRARY_ID
} from '../config'

const api = {
  get_library,
  list_entries,
  get_entry
}

function get_library() {
  const params = { token: USER_TOKEN }
  return MementoApi.get_library(LIBRARY_ID, params)
}

function list_entries() {
  const params = {
    token: USER_TOKEN,
    pageSize: 1500,
    fields: '0,36,1'
  }
  return MementoApi.list_entries(LIBRARY_ID, params)
}

function get_entry(id) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_entry(id, LIBRARY_ID, params)
}

export default api


