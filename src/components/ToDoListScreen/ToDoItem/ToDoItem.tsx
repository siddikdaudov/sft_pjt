import { FC } from 'react';
import styles from './toDoItem.module.css';

type TProps = {
  todo: { id: number; todo: string | number };
  removeToDo: (id: number) => void;
  editToDo: (id: number) => void;
};

const ToDoItem: FC<TProps> = ({ todo, removeToDo, editToDo }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <p>{todo.todo}</p>
      <button onClick={() => editToDo(todo.id)} />
      <button onClick={() => removeToDo(todo.id)} />
    </div>
  );
};

export default ToDoItem;
