import fetch from 'isomorphic-fetch'
import { API_URL } from '../config.js'

const api = {
  list_libraries,
  get_library,
  list_library_entries,
  get_library_entry
}

// PUBLIC FUNCTIONS
function list_libraries(params) {
  const query = _generate_query_string(params)
  const url = `${API_URL}/libraries?${query}`
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function get_library(id, params) {
  const query = _generate_query_string(params)
  const url = `${API_URL}/libraries/${id}?${query}`
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function list_library_entries(libraryId, params) {
  const query = _generate_query_string(params)
  const url = `${API_URL}/libraries/${libraryId}/entries?${query}`
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function get_library_entry(entryId, libraryId, params) {
  const query = _generate_query_string(params)
  const url = `${API_URL}/libraries/${libraryId}/entries/${entryId}?${query}`
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
}

// PRIVATE FUNCTIONS
function _generate_query_string(params) {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
      .map(key => esc(key) + '=' + esc(params[key]))
      .join('&')
  return query
}

export default api


