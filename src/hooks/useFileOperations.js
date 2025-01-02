import { useContext } from 'react'
import { FileContext } from '../context/FileContext'

export const useFileOperations = () => {
  const context = useContext(FileContext)
  if (!context) {
    throw new Error('useFileOperations must be used within a FileProvider')
  }
  return context
}
