const LocalStorageService = (() => {
  const service = {
    save_books,
    load_books
  }

  const LIBRARY_NAME = 'madam_pince_library'

  // public functions
  function save_books(books = {}) {
    const library = { lastUpdated: Date(), books: books }
    localStorage.setItem(LIBRARY_NAME, JSON.stringify(library))
  }

  function load_books() {
    const library = JSON.parse(localStorage.getItem(LIBRARY_NAME)) || {}
    return library.books
  }

  return service
})()

export default LocalStorageService
