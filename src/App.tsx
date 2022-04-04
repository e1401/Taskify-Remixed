import React, { useState } from 'react';
import InputField from './components/InputField';

import './App.css';
import { Todo_model } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo_model[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    setTodo('');
  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default App;
