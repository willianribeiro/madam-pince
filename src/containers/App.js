import React, { Component } from 'react'
import MadamPinceApi from '../services/MadamPinceApi'
import LocalStorageService from '../services/LocalStorageService'
import BookWrapper from '../components/BookWrapper'

class App extends Component {
  state = {
    books: [],
    fetching: true,
    error: null,
    didInvalidate: false
  }

  componentDidMount() {
    const books = LocalStorageService.load_books()

    if (books) {
      this.setState({ books: books, fetching: false })
    }
    else {
      MadamPinceApi.list_entries()
        .then(entries => {
          this.setState({ books: entries, fetching: false })
          LocalStorageService.save_books(entries)
        })
        .catch(error => {
          this.setState({ error: error, fetching: false })
          console.error(error)
        })
    }
  }

  render() {
    const { books, fetching } = this.state
    return (
      <main>
        { fetching && <div>Carregando...</div> }
        { !fetching && <BookWrapper books={books} /> }
      </main>
    )
  }
}

export default App
