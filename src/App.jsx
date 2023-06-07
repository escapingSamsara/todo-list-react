import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import './App.scss'
import TodoList from './components/TodoList'
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  const [todo, setTodo] = useState('')
  const [currentTodo, setCurrentTodo] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  /**
   * Handler function to handle input change on todo form
   * @param {string} evt
   */
  const handleInputChange = (evt) => {
    setTodo(evt.target.value)
  }
  /**
   * Submit Handler function to submit new todo to list
   * @param {string} evt
   */
  const handleFormSubmit = (evt) => {
    evt.preventDefault()

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text: todo.trim(),
        },
      ])
    }
    setTodo('')
  }

  /**
   * Handler function for delete button for a single todo
   * @param {id} id
   */
  const handleDeleteClick = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(removeItem)
  }
  /**
   * Handle Edit input change handler function
   * @param {string} evt
   */
  const handleEditInputChange = (evt) => {
    setCurrentTodo({ ...currentTodo, text: evt.target.value })
    console.log(currentTodo)
  }

  const handleEditClick = (todo) => {
    setIsEditing(true)
    setCurrentTodo({ ...todo })
  }
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo
    })

    setIsEditing(false)

    setTodos(updatedItem)
  }

  function handleEditFormSubmit(e) {
    e.preventDefault()

    // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
    handleUpdateTodo(currentTodo.id, currentTodo)
  }

  return (
    <div className={`app-container ${theme}`}>
      <TodoList
        handleInputChange={handleInputChange}
        todo={todo}
        todos={todos}
        handleFormSubmit={handleFormSubmit}
        handleDeleteClick={handleDeleteClick}
        handleEditFormSubmit={handleEditFormSubmit}
        isEditing={isEditing}
        handleEditInputChange={handleEditInputChange}
        currentTodo={currentTodo}
        setIsEditing={setIsEditing}
        handleEditClick={handleEditClick}
      />
    </div>
  )
}

export default App
