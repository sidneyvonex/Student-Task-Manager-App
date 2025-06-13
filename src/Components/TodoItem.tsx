import React from 'react'

interface Props {
  id: number
  text: string
  checked: boolean
  updateItem: (id: number) => void
  deleteItem: (id: number) => void
}

const TodoItem: React.FC<Props> = ({ id, text, checked, updateItem, deleteItem }) => {
  return (
    <li className={`todo-item ${checked ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => updateItem(id)}
        />
        <span className="custom-checkbox" />
        <span className="text">{text}</span>
      </label>
      <button className="btn-delete" onClick={() => deleteItem(id)}>
        ✕
      </button>
    </li>
  )
}

export default TodoItem
