import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { LIBRARIES } from '../config'
import { BookActions } from '../redux/entities/book/actions'
import { DomainActions } from '../redux/domain/actions'
import BookList from '../components/BookList'
import BookFilter from '../components/BookFilter'
import BookDetailsModal from '../components/BookDetailsModal'


export class App extends React.Component {
  state = {
    books: [],
    fetching: true,
    error: null,
    didInvalidate: false
  }

  componentDidMount() {
    const default_library= LIBRARIES[0]
    const libraryId = default_library.id
    const fields = default_library.fields
    this.props.list_books(libraryId, fields)
    this.props.configure_libraries(LIBRARIES)
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
  padding: 8px;
  font-family: tahoma, sans-serif;
`

// REDUX CONNECTION
const mapStateToProps = state => ({
  is_details_visible: state.ui.details.visible
})

const mapDispatchToProps = dispatch => ({
  list_books: (libraryId, fields) => {
    dispatch(BookActions.list(libraryId, fields))
  },

  configure_libraries: libraries => {
    dispatch(DomainActions.configure_libraries(libraries))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
