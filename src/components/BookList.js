import React from 'react'
import PropTypes from 'prop-types'

const BookList = ({ books }) => {
  return (
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
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    bookId: PropTypes.string,
    bookTitle: PropTypes.string,
    bookSubtitle: PropTypes.string,
    bookAuthor: PropTypes.string
  })).isRequired
}

export default BookList
