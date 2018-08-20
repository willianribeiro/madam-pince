import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BookCard = ({
  bookId,
  bookCode,
  bookTitle,
  bookSubtitle,
  bookAuthor,
  bookStatus,
  onClick
}) => {
  return (
    <Card onClick={() => onClick(bookId)} key={bookId}>
      <BookTitle>{bookTitle}</BookTitle>
      {bookSubtitle && <BookSubtitle>{bookSubtitle}</BookSubtitle>}
      <BookAuthor>{bookAuthor}</BookAuthor>
      <BookFooter>
        <BookCode>Código: {bookCode}</BookCode>
        <BookStatus>{bookStatus}</BookStatus>
      </BookFooter>
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

const BookTitle = styled.h2`
  font-size: 1.5rem
`

const BookSubtitle = styled.p`
  margin-top: .3rem;
  font-size: 1.3rem;
  `

const BookAuthor = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`
const BookCode = styled.p`

`

const BookStatus = styled.span`
  padding: 2px 4px;
  border-radius: 3px;
  border: 1px solid #ccc;
`

const BookFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: .8rem;
  color: #666;
`

BookCard.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookSubtitle: PropTypes.string,
  bookAuthor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default BookCard
