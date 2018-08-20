import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { LIBRARIES } from '../config'
import { BookActions } from '../redux/entities/book/actions'
import { DomainActions } from '../redux/domain/actions'
import { UIGlobalActions } from '../redux/ui/global/actions'
import BookList from '../components/BookList'
import BookFilter from '../components/BookFilter'
import BookDetailsModal from '../components/BookDetailsModal'

export class App extends React.PureComponent {
  componentDidMount() {
    const default_library_id = LIBRARIES[0].id
    this.props.load_libraries_select_options(LIBRARIES)
    this.props.set_default_library(default_library_id)
    this.props.list_books_if_needed(default_library_id)
  }

  render() {
    return (
      <Main>
        <BookFilter />
        <BookList />
        {this.props.is_details_visible && <BookDetailsModal />}
      </Main>
    )
  }
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: tahoma, sans-serif;
`

// REDUX CONNECTION
const mapStateToProps = state => ({
  is_details_visible: state.ui.details.visible
})

const mapDispatchToProps = dispatch => ({
  load_libraries_select_options: libraries => {
    dispatch(DomainActions.load_libraries(libraries))
  },

  list_books_if_needed: (libraryId) => {
    dispatch(BookActions.list_if_needed(libraryId))
  },

  set_default_library: library_id => {
    dispatch(UIGlobalActions.change_selected_library_id(library_id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
