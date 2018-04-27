import React, { Component } from 'react'
import MadamPinceApi from '../services/MadamPinceApi'
import BookList from '../components/BookList'

class App extends Component {
  state = {
    books: [],
    fetching: true,
    error: null,
    didInvalidate: false
  }

  componentWillMount() {
    MadamPinceApi.list_entries()
      .then(entries => {
        this.setState({ books: entries, fetching: false })
      })
      .catch(error => {
        this.setState({ error: error, fetching: false })
        console.error(error)
      })
  }

  render() {
    const { books, fetching } = this.state
    return (
      <main>
        { fetching && <div>Carregando...</div> }
        { !fetching && <BookList books={books} /> }
      </main>
    )
  }
}

export default App
