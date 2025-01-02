import React from 'react'
import styled from 'styled-components'
import FileItem from './FileItem'
import { File } from '../types'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

interface ListViewProps {
  files: File[]
}

function ListView({ files }: ListViewProps) {
  return (
    <ListContainer>
      {files.map(file => (
        <FileItem key={file.name} file={file} />
      ))}
    </ListContainer>
  )
}

export default ListView
