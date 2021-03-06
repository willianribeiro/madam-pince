import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UIDetailsActions } from '../redux/ui/details/actions'
import BookCard from './BookCard'
import NoResult from './NoResult'

export const BookList = ({ books, listing, updating_library, show_details }) => {
  const should_show_loading = () => listing || updating_library
  const should_show_no_result = () => !listing && !updating_library && books.length === 0
  const should_show_books = () => !listing && books.length > 0

  return (
    <List>
      {should_show_books() && books.map(book => (
        <BookCard
          key={book.bookId}
          bookId={book.bookId}
          bookCode={book.bookCode}
          bookTitle={book.bookTitle}
          bookSubtitle={book.bookSubtitle}
          bookAuthor={book.bookAuthor}
          bookStatus={book.bookStatus}
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
  listing: state.entities.book.listing,
  updating_library: state.entities.book.listing_if_needed
})

const mapDispatchToProps = dispatch => ({
  show_details: bookId => dispatch(UIDetailsActions.show(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
