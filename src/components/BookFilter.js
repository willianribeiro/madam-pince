import React from 'react'

const BookFilter = ({ onFilter }) => (
  <form onSubmit={onFilter} style={{ padding: '1em 0' }}>
    <label htmlFor="filter">Filtrar por título, subtítulo ou autor: </label>
    <input type="text" id="filter" />
    <button type="submit">Filtrar</button>
  </form>
)

export default BookFilter
