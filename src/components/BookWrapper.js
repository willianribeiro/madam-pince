import React from 'react'
import PropTypes from 'prop-types'
import { accent_fold } from '../utils'
import BookFilter from './BookFilter'
import BookList from './BookList'
import NoResult from './NoResult'
import MadamPinceApi from '../services/MadamPinceApi'

class BookWrapper extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    this.setState({ books: this.props.books })
  }

  onFilterClick = e => {
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

        return (bookTitleFound || bookAuthorFound || bookSubtitleFound)
      })

      this.setState({ books: filtered })
    }
    else {
      this.setState({ books })
    }
  }

  onBookCardClick = bookId => {
    MadamPinceApi.get_entry(bookId)
      .then(book => console.log(book))
      .catch(error => console.log(error))
  }

  hasBook = (books = []) => books.length > 0

  render() {
    const { books } = this.state

    return (
      <div>
        <BookFilter onFilter={this.onFilterClick} />
        {this.hasBook(books) && <BookList books={books} onBookCardClick={this.onBookCardClick} />}
        {!this.hasBook(books) && <NoResult books={books} />}
      </div>
    )
  }
}

BookWrapper.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookSubtitle: PropTypes.string,
    bookAuthor: PropTypes.string.isRequired
  })).isRequired
}

export default BookWrapper
