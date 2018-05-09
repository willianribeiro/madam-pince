import React, { Component } from 'react'
import styled from 'styled-components'
// import MadamPinceApi from '../services/MadamPinceApi'
// import LocalStorageService from '../services/LocalStorageService'
// import BookWrapper from '../components/BookWrapper'
import BookList from '../components/BookList'
import BookFilter from '../components/BookFilter'

import { connect } from 'react-redux'
import { bookActions } from '../redux/entities/book/actions'

class App extends Component {
  state = {
    books: [],
    fetching: true,
    error: null,
    didInvalidate: false
  }

  componentDidMount() {
    this.props.list_books()
  }

  render() {

    return (
      <Main>
        <BookFilter />
        <BookList />
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

const mapDispatchToProps = dispatch => ({
  list_books: () => dispatch(bookActions.list())
})

export default connect(null, mapDispatchToProps)(App)
