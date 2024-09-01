import React, { useState } from 'react';

function Task() {
  // Hook for holding all the data
  const [todos, setTodos] = useState([]);

  // Hook for getting all the data from the input field
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    if (newTodo.trim() !== '') {
      let newTodos = [...todos, { todo: newTodo.trim() }];
      setTodos(newTodos);
      setNewTodo('');
      console.log(newTodos);
    }
  }
  //Delete the task
  function deleteTodo(index) {
    let newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center display-4 mb-4'>To Do List</h1>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your task'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className='btn btn-primary' onClick={addTodo}>
          Add Task
        </button>
      </div>
      <hr />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>All Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((tod, index) => (
            <tr key={index}>
              <td>{tod.todo}</td>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
