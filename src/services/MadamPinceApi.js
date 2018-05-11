import MementoApi from './MementoApi'
import { accent_fold } from '../utils'
import { USER_TOKEN, LIBRARY_ID } from '../config'

const api = {
  get_library,
  list_entries,
  get_entry
}

function get_library(libraryId) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_library(libraryId, params)
}

function list_entries(libraryId, fields) {
  const params = {
    token: USER_TOKEN,
    pageSize: 1500,
    fields: fields
  }

  return MementoApi.list_entries(libraryId, params)
    .then(response => response.entries)
    .then(books => {
      const actives = _filter_only_actives(books)
      const shapped = _shape_books(actives)
      const sorted = _sort_alphabetically(shapped)
      return sorted
    })
}

function get_entry(id, libraryId) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_entry(id, LIBRARY_ID, params)
}

// HELPERS
function _filter_only_actives(books = []) {
  return books.filter(book => book.status === 'active')
}

function _shape_books(books = []) {
  return books.map(book => {
    return {
      ...book,
      bookId: book.id,
      bookTitle: book.fields[0].value,
      bookSubtitle: book.fields[1].value,
      bookAuthor: book.fields[2].value
    }
  })
}

function _sort_alphabetically(books = []) {
  return books.sort((a, b) => {
    const bookTitleA = accent_fold(a.bookTitle.toLowerCase())
    const bookTitleB = accent_fold(b.bookTitle.toLowerCase())
    return bookTitleA > bookTitleB ? 1 : -1
  })
}

export default api


