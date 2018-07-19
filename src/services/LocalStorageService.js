const LocalStorageService = (() => {
  const service = {
    save_library,
    load_library
  }

  // public functions
  function save_library({ library_id, library_revision, books }) {
    const library = { library_id, library_revision, books }
    localStorage.setItem(library_id, JSON.stringify(library))
  }

  function load_library(library_id) {
    const library = JSON.parse(localStorage.getItem(library_id))
    return library
  }

  return service
})()

export default LocalStorageService
