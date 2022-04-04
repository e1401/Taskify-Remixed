import './InputField.css';

const InputFiled: React.FC = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button type="submit" className="input__submit">
        Submit
      </button>
    </form>
  );
};

export default InputFiled;
