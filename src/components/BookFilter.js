import React from 'react'
import styled from 'styled-components'

const BookFilter = ({ onFilter }) => (
  <Filter onSubmit={onFilter}>
    <Section>
      <Label htmlFor="filter">Filtrar por título, subtítulo ou autor: </Label>

      <FilterBox>
        <FilterInput type="text" id="filter" />
        <FilterButton type="submit">Filtrar</FilterButton>
      </FilterBox>
    </Section>

    <Section>
      <Label htmlFor="library">Biblioteca: </Label>

      <FilterLibrarySelector id="library">
        <option value="literary" selected>Biblioteca Literária</option>
        <option value="spiritual">Biblioteca Espiritual</option>
      </FilterLibrarySelector>
    </Section>
  </Filter>
)

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

export default BookFilter
