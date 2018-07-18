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
    const libraryId = LIBRARIES[0].id
    this.props.configure_libraries(LIBRARIES)
    this.props.list_books(libraryId)
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
  list_books: (libraryId) => {
    dispatch(BookActions.list(libraryId))
  },

  configure_libraries: libraries => {
    dispatch(DomainActions.configure_libraries(libraries))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
