import React from 'react'
import styled from 'styled-components'
import { File } from '../types'

const FileItemContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`

interface FileItemProps {
  file: File
}

function FileItem({ file }: FileItemProps) {
  return (
    <FileItemContainer>
      <span>{file.name}</span>
      <span>{file.type}</span>
      <span>{file.size} KB</span>
    </FileItemContainer>
  )
}

export default FileItem
