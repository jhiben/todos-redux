import { useSelector } from 'react-redux';
import { selectTodos } from './todosSlice';

const Todos: React.FC = () => {
  const todos = useSelector(selectTodos);

  return (
    <div>
      <h3>TODO</h3>
      <section>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.label}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Todos;
