import './InputField.css';
// import { Dispatch, SetStateAction } from 'react'; WHAAT!

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  // setTodo: Dispatch<SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  console.log(todo);
  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
