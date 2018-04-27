const LocalStorageService = (() => {
  const service = {
    saveBooks,
    loadBooks
  }

  const LIBRARY_NAME = 'madam_pince_library'

  // public functions
  function saveBooks(books = {}) {
    const library = { lastUpdated: Date(), books: books }
    localStorage.setItem(LIBRARY_NAME, JSON.stringify(library))
  }

  function loadBooks() {
    const library = JSON.parse(localStorage.getItem(LIBRARY_NAME)) || {}
    return library.books
  }

  return service
})()

export default LocalStorageService
