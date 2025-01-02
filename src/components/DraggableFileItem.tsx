import React from 'react'
import { useDrag } from 'react-dnd'
import FileItem from './FileItem'
import { File } from '../types'

interface DraggableFileItemProps {
  file: File
}

function DraggableFileItem({ file }: DraggableFileItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FILE',
    item: { id: file.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <FileItem file={file} />
    </div>
  )
}

export default DraggableFileItem
