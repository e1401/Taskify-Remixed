import { useEffect, useRef, useState } from 'react';
import { Todo_model } from '../model';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './SingleTodo.css';

type Props = {
  todo: Todo_model;
  todos: Todo_model[];
  setTodos: React.Dispatch<React.SetStateAction<Todo_model[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    console.log(id);
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
    setEdit(false);
  };

  //useRef for focus on input field
  const inputRef = useRef<HTMLInputElement>(null);
  //and useEffect for that thing too
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"></input>
      ) : todo.isDone ? (
        <s className="todos__single--text">
          <strong>{todo.todo}</strong>
        </s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (edit === false && todo.isDone === false) {
              setEdit(true);
            } else {
              setEdit(false);
            }
          }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
