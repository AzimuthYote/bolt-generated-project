import React from 'react'
import styled from 'styled-components'

const ControlsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

function ViewControls({ viewMode, setViewMode }) {
  return (
    <ControlsContainer>
      <button onClick={() => setViewMode('list')}>List View</button>
      <button onClick={() => setViewMode('grid')}>Grid View</button>
      <button onClick={() => setViewMode('details')}>Details View</button>
    </ControlsContainer>
  )
}

export default ViewControls
