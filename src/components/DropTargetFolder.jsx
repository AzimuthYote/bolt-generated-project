import React from 'react'
import { useDrop } from 'react-dnd'

function DropTargetFolder({ onDrop, children }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'FILE',
    drop: (item) => onDrop(item.id),
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
