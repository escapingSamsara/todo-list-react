import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoDisplay = ({ todos, handleDeleteClick, handleEditClick }) => {
  return (
    <div className="todo-display-box">
      <ul className="todo-list">
        {todos.map((todo) => {
          const { id, text } = todo
          return (
            <li key={id} className="todo-list-item">
              <div className="todo-list-item-text">{text}</div>
              <div className="todo-list-btns">
                <button
                  className="edit-todo-btn"
                  onClick={() => handleEditClick(todo)}
                >
                  <FontAwesomeIcon icon={faPen} className="fa-icon" />
                </button>
                <button
                  type="button"
                  className="delete-todo-btn"
                  onClick={() => handleDeleteClick(id)}
                >
                  <FontAwesomeIcon icon={faCheck} className="fa-icon" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default TodoDisplay
