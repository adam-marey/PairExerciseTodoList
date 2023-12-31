// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Link } from 'react-router-dom';

import Todos from './features/todos';
import CreateTodo from './features/createTodo';

import './App.css';

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div className="App">
      <nav>
        <Link to="/">
          All Todos ({todos.length})
        </Link>
        <Link to="/createTodo">Create a Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/createTodo" element={<CreateTodo />} />
        {
          // add your edit component route here
        }
      </Routes>
    </div>
  );
}

export default App;
