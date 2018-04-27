import React from 'react'

const BookDetail = ({ fields, onClose }) => {
  const pauseEvent = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div
      onClick={onClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, .9)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '36px',
          width: '100%',
          maxWidth: '800px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#fff',
          color: '#999',
        }}
        onClick={pauseEvent}
      >
        {fields.map(field => (
          <div key={field.id}>
            <strong>{field.name}:</strong>
            <label style={{ wordWrap: 'break-word' }}>{field.value}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookDetail
