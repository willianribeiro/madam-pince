import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({
  bookId,
  bookTitle,
  bookSubtitle,
  bookAuthor,
  onClick
}) => {
  return (
    <article onClick={() => onClick(bookId)} key={bookId} style={{ cursor: 'pointer' }}>
      <h2>{bookTitle}</h2>
      <p>{bookSubtitle}</p>
      <p>{bookAuthor}</p>
    </article>
  )
}

BookCard.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookSubtitle: PropTypes.string,
  bookAuthor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BookCard
