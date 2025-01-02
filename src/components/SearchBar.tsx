import React, { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`

interface SearchBarProps {
  onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search files..."
        value={query}
        onChange={handleChange}
      />
    </SearchContainer>
  )
}

export default SearchBar
