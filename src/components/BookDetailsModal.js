import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { BookActions } from '../redux/entities/book/actions'
import { UIDetailsActions } from '../redux/ui/details/actions'

class BookDetailsModal extends React.PureComponent {

  componentDidMount() {
    const { bookId, selected_library_id, get_book } = this.props
    get_book(bookId, selected_library_id)
    document.body.style = 'overflow: hidden'
    document.addEventListener("keydown", this.props.hide, false)
  }

  componentWillUnmount() {
    document.body.style = 'overflow: initial'
    document.removeEventListener("keydown", this.props.hide, false)
    this.props.reset_entry()
  }

  getBookCoverUrl = () => {
    const fields = this.props.book.fields || []
    const covers = fields.filter(field => {
      return (
        field.name === "Capa" &&
        field.type === "image"
      )
    })

    return covers.length > 0
      ? covers[0].value
      : "http://via.placeholder.com/150x250"
  }

  getFieldsToList = () => {
    const fields = this.props.book.fields || []

    return fields.filter(field => {
      return (field.id !== 30 && field.id !== 31 && field.id !== 8)
    })
  }

  pauseEvent = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  shouldShowField = fieldValue => {
    return (
      fieldValue !== undefined &&
      fieldValue !== null &&
      fieldValue !== ''
    )
  }

  render() {
    const { hide } = this.props
    const coverUrl = this.getBookCoverUrl()
    const fields = this.getFieldsToList()

    return (
      <Modal onClick={hide}>
        <ModalBox onClick={this.pauseEvent}>
          <ModalCloseButton onClick={hide}>&times;</ModalCloseButton>

          <BookCover>
            <BookCoverImg src={coverUrl} />
          </BookCover>

          <BookFields>
            {fields.map(field => {
              return this.shouldShowField(field.value)
                ? (
                  <BookField key={field.id}>
                    <BookFieldTitle>{field.name}:</BookFieldTitle>
                    <BookFieldValue>{field.value || '–'}</BookFieldValue>
                  </BookField>
                )
                : null
            })}
          </BookFields>
        </ModalBox>
      </Modal>
    )
  }
}

// INTERNAL COMPONENTS
const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, .9);
`

const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px
  border-radius: 5px;
  background-color: #fff;
  color: #999;
`

const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  font-size: 30px;
  cursor: pointer;
`

const BookCover = styled.div`
  margin-bottom: 16px;
  text-align: center;
`

const BookCoverImg = styled.img`
  height: 250px;
`

const BookFields = styled.div`

`

const BookField = styled.div`
  margin-bottom: 16px;
`

const BookFieldTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
`

const BookFieldValue = styled.p`
  word-wrap: break-word;
`

// REDUX CONNECTION
const mapStateToProps = state => ({
  bookId: state.ui.details.bookId,
  book: state.entities.book.entry,
  selected_library_id: state.ui.global.selected_library_id
})

const mapDispatchToProps = dispatch => ({
  get_book: (bookId, selected_library_id) => dispatch(BookActions.get(bookId, selected_library_id)),
  hide: () => dispatch(UIDetailsActions.hide()),
  reset_entry: () => dispatch(BookActions.reset_entry())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsModal)
