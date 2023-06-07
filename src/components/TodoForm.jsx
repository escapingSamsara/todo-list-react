import { faCheck, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoForm = ({
  handleInputChange,
  handleFormSubmit,
  handleEditFormSubmit,
  isEditing,
  todo,
  currentTodo,
  handleEditInputChange,
  setIsEditing,
}) => {
  return (
    <div className="todo-form-container">
      {isEditing ? (
        <form
          action=""
          id="todo-form"
          className="todo-form"
          onSubmit={handleEditFormSubmit}
        >
          <div className="form-box-check">
            <input
              name="editTodo"
              type="text"
              id="todo-text"
              className="todo-input check-todo-input"
              placeholder="edit todo"
              value={currentTodo.text}
              onChange={handleEditInputChange}
            />
          </div>
          <div className="btn-box check-btns">
            <button
              type="submit"
              id="new-todo-submit"
              className="submit-btn check-btn"
            >
              <FontAwesomeIcon icon={faCheck} className="fa-icon" />
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              <FontAwesomeIcon icon={faXmark} className="fa-icon" />
            </button>
          </div>
        </form>
      ) : (
        <form
          action=""
          id="todo-form"
          className="todo-form"
          onSubmit={handleFormSubmit}
        >
          <div className="form-box-check">
            <input
              name="todo"
              type="text"
              id="todo-text"
              className="todo-input"
              placeholder=" enter new todo"
              value={todo}
              onChange={handleInputChange}
            />
            <div className="btn-box">
              <button id="new-todo-submit" className="add-todo-btn">
                <FontAwesomeIcon icon={faPlus} className="fa-icon" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}
export default TodoForm
