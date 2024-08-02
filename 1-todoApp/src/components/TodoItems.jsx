import { useId } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ arr, onDelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {arr.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoItems;
