import React from 'react'
import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

function DetailsView({ files }) {
  return (
    <DetailsContainer>
      {files.map(file => (
        <DetailsItem key={file.name}>
          <span>{file.name}</span>
          <span>{file.type}</span>
          <span>{file.size} KB</span>
          <span>{new Date(file.modified).toLocaleDateString()}</span>
        </DetailsItem>
      ))}
    </DetailsContainer>
  )
}

export default DetailsView
