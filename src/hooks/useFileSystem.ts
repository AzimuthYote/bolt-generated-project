import { useState } from 'react'
import { File } from '../types'

export const useFileSystem = () => {
  const [files, setFiles] = useState<File[]>([])

  const openDirectory = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker()
      const files: File[] = []
      for await (const entry of directoryHandle.values()) {
        files.push({
          id: Date.now(),
          name: entry.name,
          type: entry.kind,
          size: 0,
          modified: new Date().toISOString()
        })
      }
      setFiles(files)
    } catch (error) {
      console.error('Error accessing directory:', error)
    }
  }

  const moveFile = (fileId: number, targetFolder: string) => {
    setFiles(prevFiles =>
      prevFiles.map(file =>
        file.id === fileId ? { ...file, folder: targetFolder } : file
      )
    )
  }

  return { files, openDirectory, moveFile }
}
