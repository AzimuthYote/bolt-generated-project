import React, { useState } from 'react'
import styled from 'styled-components'
import { useFileSystem } from '../hooks/useFileSystem'
import ViewControls from './ViewControls'
import ListView from './ListView'
import GridView from './GridView'
import DetailsView from './DetailsView'
import SearchBar from './SearchBar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const FileViewContainer = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  margin-left: 250px;
  border-bottom: var(--border-width) var(--border-style) var(--border-color);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    padding-bottom: 100px;
  }
`

function FileView() {
  const { files, openDirectory, moveFile } = useFileSystem()
  const [viewMode, setViewMode] = useState('list')
  const [filteredFiles, setFilteredFiles] = useState(files)

  const handleSearch = (query) => {
    const filtered = files.filter(file =>
      file.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredFiles(filtered)
  }

  const renderView = () => {
    switch (viewMode) {
      case 'list':
        return <ListView files={filteredFiles} />
      case 'grid':
        return <GridView files={filteredFiles} />
      case 'details':
        return <DetailsView files={filteredFiles} />
      default:
        return <ListView files={filteredFiles} />
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <FileViewContainer>
        <ViewControls viewMode={viewMode} setViewMode={setViewMode} />
        <SearchBar onSearch={handleSearch} />
        <button onClick={openDirectory}>Open Directory</button>
        {renderView()}
      </FileViewContainer>
    </DndProvider>
  )
}

export default FileView
