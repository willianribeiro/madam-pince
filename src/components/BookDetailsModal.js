import React from 'react'
import styled from 'styled-components'

const BookDetailsModal = ({ fields, onClose }) => {
  const pauseEvent = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <Modal onClick={onClose} >
      <ModalBox onClick={pauseEvent}>
        <ModalClose onClick={onClose}>&#10060;</ModalClose>

        {fields.map(field => (
          <ModalField key={field.id}>
            <strong>{field.name}:</strong>
            <ModalLabel>{field.value}</ModalLabel>
          </ModalField>
        ))}
      </ModalBox>
    </Modal>
  )
}

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .9);
`

const ModalBox = styled.div`
  position: relative;
  display: inline-block;
  padding: 36px;
  width: 100%;
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #999;
`

const ModalClose = styled.div`
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

const ModalField = styled.div`
  margin-bottom: 8px;
`

const ModalLabel = styled.label`
  margin-left: 8px;
  word-wrap: break-word;
`

export default BookDetailsModal
