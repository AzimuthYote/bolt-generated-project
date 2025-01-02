import React, { createContext, useState, useMemo } from 'react'

export const FileContext = createContext()

export const FileProvider = ({ children }) => {
  const [currentFolder, setCurrentFolder] = useState('root')
  const [files, setFiles] = useState([])
  const [viewMode, setViewMode] = useState('list')

  const createFile = (name, type) => {
    const newFile = {
      id: Date.now(),
      name,
      type,
      size: 0,
      modified: new Date().toISOString()
    }
    setFiles(prev => [...prev, newFile])
  }

  const deleteFile = (id) => {
    setFiles(prev => prev.filter(file => file.id !== id))
  }

  const value = useMemo(() => ({
    currentFolder,
    setCurrentFolder,
    files,
    setFiles,
    viewMode,
    setViewMode,
    createFile,
    deleteFile
  }), [currentFolder, files, viewMode])

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  )
}
