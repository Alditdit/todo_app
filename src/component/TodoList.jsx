import React from 'react'
import '../App.css';

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className='list'>
      {todos?.map((todo, ind) => (
        <div className='todo'>
          <div
            key={ind}
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            {todo.text}
          </div>
          <button
            type="button"
            className="todo-btn primary"
            onClick={() => toggleTodo(ind)}
          >
            tandai sudah
          </button>
          <button
            type="button"
            className="todo-btn danger"
            onClick={() => deleteTodo(ind)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
