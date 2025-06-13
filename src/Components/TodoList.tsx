import React from 'react'
import Filter from './filter'
import TodoItem from './TodoItem'
import type { TodoItemType } from '../App'

interface TodoListProps {
  items: TodoItemType[]
  updateItem: (id: number) => void
  deleteItem: (id: number) => void
  selectedFilter: 'all' | 'active' | 'completed'
  updateFilter: (filter: 'all' | 'active' | 'completed') => void
  updateItems: (items: TodoItemType[]) => void
  clearCompleted: () => void
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  updateItem,
  deleteItem,
  selectedFilter,
  updateFilter,
  clearCompleted,
}) => {
  const filteredItems = items.filter(item => {
    if (selectedFilter === 'active') return !item.checked
    if (selectedFilter === 'completed') return item.checked
    return true
  })

  const itemsLeft = items.filter(item => !item.checked).length

  return (
    <div className="todo-list">
      <ul className="todo-items">
        {filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <div className="footer">
        <span>{itemsLeft} items left</span>
        <Filter selected={selectedFilter} setFilter={updateFilter} />
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoList
