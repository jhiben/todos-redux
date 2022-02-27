import { useAppDispatch } from 'app/hooks';
import { addTodo } from './todosSlice';

const AddTodo: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addTodo({ label: 'New todo' }))}>Add</button>
    </div>
  );
};

export default AddTodo;
