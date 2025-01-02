import { useState } from 'react'

export const useFileSystem = () => {
  const [files, setFiles] = useState([])

  const openDirectory = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker()
      const files = []
      for await (const entry of directoryHandle.values()) {
        files.push(entry)
      }
      setFiles(files)
    } catch (error) {
      console.error('Error accessing directory:', error)
    }
  }

  const moveFile = (fileId, targetFolder) => {
    setFiles(prevFiles =>
      prevFiles.map(file =>
        file.id === fileId ? { ...file, folder: targetFolder } : file
      )
    )
  }

  return { files, openDirectory, moveFile }
}
