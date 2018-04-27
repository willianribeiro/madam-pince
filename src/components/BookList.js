import React from 'react'
import PropTypes from 'prop-types'
import BookCard from './BookCard'

const BookList = ({ books, onBookCardClick }) => {
  return (
    <div>
      {books.map(book => (
        <BookCard
          key={book.bookId}
          bookId={book.bookId}
          bookTitle={book.bookTitle}
          bookSubtitle={book.bookSubtitle}
          bookAuthor={book.bookAuthor}
          onClick={onBookCardClick}
        />
      ))}
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array,
  onBookCardClick: PropTypes.func
}

export default BookList
