import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BookCard from './BookCard'

export const BookList = ({ books, onBookCardClick = () => {} }) => {
  return (
    <List>
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
    </List>
  )
}

const List = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

BookList.propTypes = {
  books: PropTypes.array,
  onBookCardClick: PropTypes.func
}

const mapStateToProps = state => ({
  books: state.ui.list.books
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(BookList)
