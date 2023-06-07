import bgImage from '../assets/bg4.jpg'
import TodoDisplay from './TodoDisplay'
import TodoForm from './TodoForm'
import './TodoList.scss'
const TodoList = ({
  handleInputChange,
  todo,
  todos,
  handleDeleteClick,
  handleFormSubmit,
  handleEditInputChange,
  setIsEditing,
  currentTodo,
  isEditing,
  handleEditClick,
  handleEditFormSubmit,
}) => {
  return (
    <div
      className="todo-list-container"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.305)), url(${bgImage})`,
      }}
    >
      <div className="todo-list-header">
        <h3>todo or not todo?</h3>
      </div>
      <div className="todo-list-box">
        <div className="form-container">
          <TodoForm
            handleInputChange={handleInputChange}
            todo={todo}
            handleFormSubmit={handleFormSubmit}
            handleEditFormSubmit={handleEditFormSubmit}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            handleEditInputChange={handleEditInputChange}
            currentTodo={currentTodo}
          />
        </div>
        <div className="todo-display-container">
          <TodoDisplay
            todos={todos}
            currentTodo={currentTodo}
            handleDeleteClick={handleDeleteClick}
            handleEditClick={handleEditClick}
          />
        </div>
      </div>
    </div>
  )
}
export default TodoList
