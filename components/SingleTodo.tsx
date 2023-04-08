import React, { useEffect, useRef, useState } from "react";
import { Todo } from "@/src/modal";
import styles from "../styles/InputField.module.css";
import { AiOutlineCheck, AiFillEdit, AiFillDelete } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => {
        return t.id === id ? { ...t, todo: editTodo } : t;
      })
    );
    setEdit(false);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((t) => {
        return t.id === id ? { ...t, isDone: !t.isDone } : todo;
      })
    );
  };

  useEffect(() => {
    inputRef.current?.focus(); // to make the input focus auto
  }, [edit]);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className={styles.todos__single}
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <input
            ref={inputRef}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className={styles.todos__single__text}
          />
        ) : todo.isDone ? (
          <s className={styles.todos__single__text}>{todo.todo}</s>
        ) : (
          <span className={styles.todos__single__text}>{todo.todo}</span>
        )}

        <div>
          <span
            className={styles.icon}
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiFillEdit />
          </span>
          <span className={styles.icon} onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className={styles.icon} onClick={() => handleDone(todo.id)}>
            <AiOutlineCheck />
          </span>
        </div>
      </form>
    </>
  );
};

export default SingleTodo;
