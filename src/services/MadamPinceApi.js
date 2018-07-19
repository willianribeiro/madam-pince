import MementoApi from './MementoApi'
import { accent_fold } from '../utils'
import { USER_TOKEN, LIBRARIES } from '../config'

const api = {
  get_library,
  list_library_entries,
  get_library_entry
}

function get_library(libraryId) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_library(libraryId, params)
}

function list_library_entries(libraryId) {
  const library = LIBRARIES.filter(library => library.id === libraryId)[0]
  const params = {
    token: USER_TOKEN,
    pageSize: 5000,
    fields: library.fields
  }

  return MementoApi.list_library_entries(libraryId, params)
    .then(response => response.entries)
    .then(books => {
      const actives = _filter_only_actives(books)
      const shapped = _shape_books(actives)
      const sorted = _sort_alphabetically(shapped)
      return sorted
    })
}

function get_library_entry(entryId, libraryId) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_library_entry(entryId, libraryId, params)
}

// HELPERS
function _filter_only_actives(books = []) {
  return books.filter(book => book.status === 'active')
}

function _shape_books(books = []) {
  return books.map(book => {
    const bookId = book.id
    const bookTitle = book.fields[0] ? book.fields[0].value : ''
    const bookSubtitle = book.fields[1] ? book.fields[1].value : ''
    const bookAuthor = book.fields[2] ? book.fields[2].value : ''

    return {
      ...book,
      bookId,
      bookTitle,
      bookSubtitle,
      bookAuthor
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


