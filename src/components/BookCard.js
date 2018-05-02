import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BookCard = ({
  bookId,
  bookTitle,
  bookSubtitle,
  bookAuthor,
  onClick
}) => {
  return (
    <Card onClick={() => onClick(bookId)} key={bookId}>
      <CardTitle>{bookTitle}</CardTitle>
      {bookSubtitle && <CardSubtitle>{bookSubtitle}</CardSubtitle>}
      <CardAuthor>{bookAuthor}</CardAuthor>
    </Card>
  )
}

const Card = styled.article`
  padding: 16px;
  cursor: pointer;

  & + & {
    border-top: 1px solid #ccc;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`

const CardTitle = styled.h2`
  font-size: 1.5rem
`

const CardSubtitle = styled.p`
  margin-top: .3rem;
  font-size: 1.3rem;
  `

const CardAuthor = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`

BookCard.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookSubtitle: PropTypes.string,
  bookAuthor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BookCard
