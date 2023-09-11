import { FC } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

type TProps = {
  todos: Array<{ id: number; todo: string | number }>;
  removeToDo: (id: number) => void;
  editToDo: (id: number) => void;
};

export const ToDoListItems: FC<TProps> = ({ todos, removeToDo, editToDo }): JSX.Element => {
  return (
    <ul style={{ marginTop: '20px' }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: '10px' }}>
          <ToDoItem todo={todo} removeToDo={removeToDo} editToDo={editToDo} />
        </li>
      ))}
    </ul>
  );
};
