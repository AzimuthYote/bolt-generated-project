import React from 'react'
import { FileProvider } from './context/FileContext'
import Sidebar from './components/Sidebar'
import FileView from './components/FileView'

function App() {
  return (
    <FileProvider>
      <Sidebar />
      <FileView />
    </FileProvider>
  )
}

export default App
