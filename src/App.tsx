import  { useEffect, useState } from 'react'
import TodoList from './Components/TodoList'
import todosData from './data/data.json'
import './App.scss'



export interface TodoItemType {
  id: number
  text: string
  checked: boolean
}

type FilterType = 'all' | 'active' | 'completed'

function App() {
  const [items, setItems] = useState<TodoItemType[]>([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')


  useEffect(() => {
    setItems(todosData)
  }, [])

  const addItem = () => {
    if (input.trim() === '') return
    const newItem: TodoItemType = {
      id: Date.now(),
      text: input.trim(),
      checked: false
    }
    setItems(prev => [newItem, ...prev])
    setInput('')
  }

  const updateItem = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const deleteItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCompleted = () => {
    setItems(prev => prev.filter(item => !item.checked))
  }

  return (
    <div className="app">
      <h1>TODO</h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <TodoList
        items={items}
        updateItem={updateItem}
        deleteItem={deleteItem}
        selectedFilter={filter}
        updateFilter={setFilter}
        updateItems={setItems} // Can be removed if not using reorder
        clearCompleted={clearCompleted}
      />
      <div style={{ color: '#fff', fontSize:'13px', margin:' 20px 500px'}}>Drag and Drop to render List</div>
    </div>
  )
}

export default App
