import React from 'react'
import PropTypes from 'prop-types'
import { accent_fold } from '../utils'

class BookList extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    this.setState({ books: this.props.books })
  }

  filter = e => {
    e.preventDefault()
    e.persist()
    const { books } = this.props
    const { filter } = e.target
    const filterTitle = accent_fold(filter.value.trim().toLowerCase())

    if (filterTitle) {
      const filtered = books.filter(book => {
        const bookTitle = accent_fold(book.bookTitle.trim().toLowerCase())
        const bookSubtitle = accent_fold(book.bookSubtitle.trim().toLowerCase())
        const bookAuthor = accent_fold(book.bookAuthor.trim().toLowerCase())
        const bookTitleFound = bookTitle.indexOf(filterTitle) > -1
        const bookAuthorFound = bookAuthor.indexOf(filterTitle) > -1
        const bookSubtitleFound = bookSubtitle.indexOf(filterTitle) > -1

        return bookTitleFound || bookAuthorFound || bookSubtitleFound
      })

      this.setState({ books: filtered })
    }
    else {
      this.setState({ books })
    }
  }

  hasBook = (books = []) => books.length > 0

  render() {
    const { books } = this.state

    return (
      <div>
        <Filter onFilter={this.filter} />
        { this.hasBook(books) && <Books books={books} />}
        { !this.hasBook(books) && <NoResult books={books} />}
      </div>
    );
  }
}

const Filter = ({ onFilter }) => (
  <form onSubmit={onFilter} style={{ padding: '1em' }}>
    <label htmlFor="filter">Filtrar por título, subtítulo ou autor: </label>
    <input type="text" id="filter" />
    <button type="submit">Filtrar</button>
  </form>
)

const Books = ({ books }) => (
  <ul>
    {
      books.map(book => {
        return (
          <li key={book.bookId}>
            <h2>{book.bookTitle}</h2>
            <p>{book.bookSubtitle}</p>
            <p>{book.bookAuthor}</p>
          </li>
        )
      })
    }
  </ul>
)

const NoResult = () => (
  <strong style={{ display: 'block', padding: '1.5em 1em' }}>Nenhum livro encontrado.</strong>
)

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookSubtitle: PropTypes.string,
    bookAuthor: PropTypes.string.isRequired
  })).isRequired
}

export default BookList;
