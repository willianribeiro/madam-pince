import React from 'react'
import PropTypes from 'prop-types'
import { accent_fold } from '../utils'
import BookFilter from './BookFilter'
import NoResult from './NoResult'

class BookList extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    this.setState({ books: this.props.books })
  }

  onFilter = e => {
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
        <BookFilter onFilter={this.onFilter} />

        {!this.hasBook(books) && <NoResult books={books} />}

        {this.hasBook(books) &&
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
        }
      </div>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookSubtitle: PropTypes.string,
    bookAuthor: PropTypes.string.isRequired
  })).isRequired
}

export default BookList;
