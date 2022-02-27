import { useAppDispatch } from 'app/hooks';
import { Todo as TodoModel } from './models';
import { doTodo, removeTodo, undoTodo } from './todosSlice';

interface TodoProps {
  todo: TodoModel;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <span>
      {todo.label}
      <input
        type="checkbox"
        title="completed"
        checked={todo.completed}
        onChange={e => dispatch(e.target.checked ? doTodo(todo.id) : undoTodo(todo.id))}
      />
      <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
        🗑️
      </button>
    </span>
  );
};

export default Todo;
