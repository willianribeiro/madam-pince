import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UIDetailsActions } from '../redux/ui/details/actions'
import BookCard from './BookCard'
import NoResult from './NoResult'

export const BookList = ({ books, listing, show_details }) => {
  const should_show_loading = () => listing
  const should_show_no_result = () => !listing && books.length === 0
  const should_show_books = () => !listing && books.length > 0

  return (
    <List>
      {should_show_books() && books.map(book => (
        <BookCard
          key={book.bookId}
          bookId={book.bookId}
          bookTitle={book.bookTitle}
          bookSubtitle={book.bookSubtitle}
          bookAuthor={book.bookAuthor}
          onClick={show_details}
        />
      ))}

      {should_show_loading() &&
        <ListLoading>
          Olá! Aguarde um pouco que estamos carregando o acervo (=
        </ListLoading>
      }

      {should_show_no_result() && <NoResult />}
    </List>
  )
}

const List = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

const ListLoading = styled.div`
  padding: 24px;
  text-align: center;
`

const mapStateToProps = state => ({
  books: state.ui.list.books,
  listing: state.entities.book.listing
})

const mapDispatchToProps = dispatch => ({
  show_details: bookId => dispatch(UIDetailsActions.show(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
