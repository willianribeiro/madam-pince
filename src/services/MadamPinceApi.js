import MementoApi from './MementoApi'
import { accent_fold } from '../utils'
import { USER_TOKEN, LIBRARY_ID } from '../config'

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
    .then(response => {
      const books = response.entries
        .filter(book => book.status === 'active')
        .map(book => {
          return {
            ...book,
            bookId: book.id,
            bookTitle: book.fields[0].value,
            bookSubtitle: book.fields[1].value,
            bookAuthor: book.fields[2].value
          }
        })
        .sort((a, b) => {
          const bookTitleA = accent_fold(a.bookTitle.toLowerCase())
          const bookTitleB = accent_fold(b.bookTitle.toLowerCase())

          return bookTitleA > bookTitleB
            ? 1
            : -1
        })

      return books
    })
}

function get_entry(id) {
  const params = { token: USER_TOKEN }
  return MementoApi.get_entry(id, LIBRARY_ID, params)
}

export default api


