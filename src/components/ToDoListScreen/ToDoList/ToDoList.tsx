import { useState } from 'react';
import styles from './toDoList.module.css';
import { Input } from '../../FormScreen/Input/Input';
import { ToDoListItems } from '../ToDoListItems/ToDoListItems';
import { Modal } from '../Modal/Modal';
import { useInput } from '../../../hooks/useInput';

export const ToDoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Array<{ id: number; todo: string | number }>>([
    { id: 1, todo: 'Докончить ТЗ' },
  ]);
  const todo = useInput('', { isEmpty: true });
  const editedToDo = useInput('', { isEmpty: true });
  const [selectedToDoId, setSelectedToDoId] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const addToDo = () => {
    if (!todo.value) return;
    setTodos((current) => {
      return [{ id: current.length + 1, todo: todo.value }, ...current];
    });
  };

  const removeToDo = (id: number) => {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id);
    });
  };

  const showEditForm = (id: number) => {
    const selectedToDo = todos.find((todo) => todo.id === id);
    editedToDo.setValue(selectedToDo?.todo!);
    setSelectedToDoId(selectedToDo?.id!);
    setOpenModal(true);
  };

  const editToDo = () => {
    setTodos((current) => {
      return current.map((todo) =>
        todo.id === selectedToDoId ? { id: todo.id, todo: editedToDo.value } : todo
      );
    });
    setOpenModal(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Мои дела</h2>
        <div className={styles.input}>
          <Input
            value={todo.value}
            onChange={todo.onChange}
            type='text'
            mask={false}
            errors={todo.errors}
          />
          <button onClick={addToDo}>Добавить</button>
        </div>
        <ToDoListItems todos={todos} removeToDo={removeToDo} editToDo={showEditForm} />
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Input
          value={editedToDo.value}
          onChange={editedToDo.onChange}
          type='text'
          mask={false}
          errors={editedToDo.errors}
        />
        <button
          style={{ margin: '10px 0 0 auto', padding: '5px', display: 'flex' }}
          onClick={editToDo}
        >
          Изменить
        </button>
      </Modal>
    </>
  );
};
