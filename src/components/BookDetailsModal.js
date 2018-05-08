import React from 'react'
import styled from 'styled-components'

class BookDetailsModal extends React.PureComponent {

  componentDidMount() {
    document.body.style = 'overflow: hidden'
  }

  componentWillUnmount() {
    document.body.style = 'overflow: initial'
  }

  getBookCoverUrl = () => {
    const covers = this.props.fields.filter(field => {
      return (
        field.name === "Capa" &&
        field.type === "image"
      )
    })

    return covers.length > 0
      ? covers[0].value
      : "https://place-hold.it/150x250"
  }

  getFieldsToList = () => {
    return this.props.fields.filter(field => {
      return (field.id !== 30 && field.id !== 31 && field.id !== 8)
    })
  }

  pauseEvent = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  render() {
    const { onClose } = this.props
    const coverUrl = this.getBookCoverUrl()
    const fields = this.getFieldsToList()

    return (
      <Modal onClick={onClose}>
        <ModalBox onClick={this.pauseEvent}>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

          <BookCover>
            <BookCoverImg src={coverUrl} />
          </BookCover>

          <BookFields>
            {fields.map(field => (
              <BookField key={field.id}>
                <BookFieldTitle>{field.name}:</BookFieldTitle>
                <BookFieldValue>{field.value || '-- não disponível --'}</BookFieldValue>
              </BookField>
            ))}
          </BookFields>
        </ModalBox>
      </Modal>
    )
  }
}

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

export default BookDetailsModal
