import React from 'react'
import { useState } from 'react'
import "../App.css"

export const TodoAdd = ({ addTodo }) => {
  const [value, setValue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}
