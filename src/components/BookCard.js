import React from 'react'
import PropTypes from 'prop-types'

const BookCard = ({
  bookId,
  bookTitle,
  bookSubtitle,
  bookAuthor
}) => (
  <article key={bookId}>
    <h2>{bookTitle}</h2>
    <p>{bookSubtitle}</p>
    <p>{bookAuthor}</p>
  </article>
)

BookCard.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookSubtitle: PropTypes.string,
  bookAuthor: PropTypes.string.isRequired,
}

export default BookCard
