import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);         // To store list of todos
  const [inputValue, setInputValue] = useState(''); // For input field

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo} style={{ marginLeft: '10px' }}>
        Add Todo
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => handleRemoveTodo(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
