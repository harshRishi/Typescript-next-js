import React, { useRef } from "react";
import styles from "../styles/InputField.module.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // this is void function with event as it's argument
}

// const InputField = ({ todo, setTodo }: Props) => { // OR ->
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null); // get the type by hover over the element
  return (
    <>
      <form
        className={styles.input}
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={styles.input__box}
          type="input"
          placeholder="Enter a task"
        />
        <button type="submit" className={styles.input_submit}>
          Add
        </button>
      </form>
    </>
  );
};

export default InputField;
