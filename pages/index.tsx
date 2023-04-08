import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import InputField from "../components/InputField";
import TodoList from "@/components/TodoList";
import { Todo } from "../src/modal";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // this is how we create a type array

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className={styles.App}>
      <span className={styles.heading}>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
