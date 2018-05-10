import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UIDetailsActions } from '../redux/ui/details/actions'
import BookCard from './BookCard'

export const BookList = ({ books, show_details }) => {
  return (
    <List>
      {books.map(book => (
        <BookCard
          key={book.bookId}
          bookId={book.bookId}
          bookTitle={book.bookTitle}
          bookSubtitle={book.bookSubtitle}
          bookAuthor={book.bookAuthor}
          onClick={show_details}
        />
      ))}
    </List>
  )
}

const List = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

const mapStateToProps = state => ({
  books: state.ui.list.books
})

const mapDispatchToProps = dispatch => ({
  show_details: bookId => dispatch(UIDetailsActions.show(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
