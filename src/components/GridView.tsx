import React from 'react'
import styled from 'styled-components'
import { File } from '../types'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
`

const GridItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`

interface GridViewProps {
  files: File[]
}

function GridView({ files }: GridViewProps) {
  return (
    <GridContainer>
      {files.map(file => (
        <GridItem key={file.name}>
          <div>{file.name}</div>
          <div>{file.type}</div>
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default GridView
