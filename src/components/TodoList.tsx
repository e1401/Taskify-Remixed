import './TodoList.css';

import React from 'react';
import { Todo_model } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo_model[];
  //   setTodos: React.SetStateAction<Todo_model[]>;
  setTodos: React.Dispatch<React.SetStateAction<Todo_model[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}{' '}
    </div>
  );
};

export default TodoList;
