import React from 'react'
import { useDrop } from 'react-dnd'

interface DropTargetFolderProps {
  onDrop: (id: number) => void
  children: React.ReactNode
}

function DropTargetFolder({ onDrop, children }: DropTargetFolderProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FILE',
    drop: (item: { id: number }) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }))

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? 'rgba(0, 200, 200, 0.2)' : 'transparent',
        padding: '0.5rem',
      }}
    >
      {children}
    </div>
  )
}

export default DropTargetFolder
