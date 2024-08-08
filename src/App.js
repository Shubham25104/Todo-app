import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const markAllAsDone = () => {
    const newTodos = todos.map(todo => ({ ...todo, completed: true }));
    setTodos(newTodos);
  };

  const markAllAsUndone = () => {
    const newTodos = todos.map(todo => ({ ...todo, completed: false }));
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="actions">
        <button onClick={markAllAsDone}>Mark All as Done</button>
        <button onClick={markAllAsUndone}>Mark All as Undone</button>
        <button onClick={deleteAllTodos}>Delete All</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <footer className="footer">Made by Shubham Sharma</footer>
    </div>
  );
}

export default App;
