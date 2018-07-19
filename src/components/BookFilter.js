import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { accent_fold } from '../utils'
import { UIListActions } from '../redux/ui/list/actions'
import { BookActions } from '../redux/entities/book/actions'
import { UIGlobalActions } from '../redux/ui/global/actions'

export const BookFilter = ({
  books,
  libraries,
  set_filtered_books,
  list_books,
  set_selected_library_id
}) => {
  const onLibraryChange = e => {
    const libraryId = e.target.value
    set_selected_library_id(libraryId)
    list_books(libraryId)
  }

  const filter = e => {
    e.preventDefault()
    e.persist()
    const { filter } = e.target
    const filterTitle = accent_fold(filter.value.trim().toLowerCase())

    if (filterTitle) {
      const filtered = books.filter(book => {
        const bookTitle = accent_fold(book.bookTitle.trim().toLowerCase())
        const bookSubtitle = accent_fold(book.bookSubtitle.trim().toLowerCase())
        const bookAuthor = accent_fold(book.bookAuthor.trim().toLowerCase())
        const bookTitleFound = bookTitle.indexOf(filterTitle) > -1
        const bookAuthorFound = bookAuthor.indexOf(filterTitle) > -1
        const bookSubtitleFound = bookSubtitle.indexOf(filterTitle) > -1

        return (bookTitleFound || bookAuthorFound || bookSubtitleFound)
      })

      set_filtered_books(filtered)
    }
    else {
      set_filtered_books(books)
    }
  }

  return (
    <Filter onSubmit={filter}>
      <Section>
        <Label htmlFor="filter">Filtrar por título ou autor: </Label>

        <FilterBox>
          <FilterInput type="text" id="filter" />
          <FilterButton type="submit">Filtrar</FilterButton>
        </FilterBox>
      </Section>

      <Section>
      <Label htmlFor="library">Biblioteca: </Label>

      <FilterLibrarySelector id="library" onChange={onLibraryChange}>
        {libraries.map(library => {
          return <option value={library.id} key={library.id}>{library.name}</option>
        })}
      </FilterLibrarySelector>
    </Section>
    </Filter>
  )
}

const Filter = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 40px auto;
`

const FilterBox = styled.div`
  display: flex;
`

const FilterInput = styled.input`
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
  width: 1px;
  height: 35px;
  padding: 0 4px;
  border-radius: 3px 0 0 3px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
  }
`

const FilterButton = styled.button`
  appearance: none;
  flex-basis: 50px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 35px;
  margin: 0;
  background-color: transparent;
  border: 1px solid #ccc;
  border-left-width: 0;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
`

const FilterLibrarySelector = styled.select`
  box-sizing: border-box;
  height: 35px;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 3px;
`

const Section = styled.div`
  & + & {
    margin-top: 16px
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`

const mapStateToProps = state => ({
  books: state.entities.book.entries,
  libraries: state.domain.libraries
})

const mapDispatchToProps = dispatch => ({
  list_books: libraryId => dispatch(BookActions.list(libraryId)),
  set_filtered_books: books => dispatch(UIListActions.set_filtered_books(books)),
  set_selected_library_id: library_id => dispatch(UIGlobalActions.change_selected_library_id(library_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookFilter)
