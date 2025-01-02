import React from 'react'
import styled from 'styled-components'
import FileItem from './FileItem'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function ListView({ files }) {
  return (
    <ListContainer>
      {files.map(file => (
        <FileItem key={file.name} file={file} />
      ))}
    </ListContainer>
  )
}

export default ListView
