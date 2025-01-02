import React from 'react'
import { useDrag } from 'react-dnd'
import FileItem from './FileItem'

function DraggableFileItem({ file }) {
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
