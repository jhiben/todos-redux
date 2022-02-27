import { useAppSelector } from 'app/hooks';
import AddTodo from './AddTodo';
import Todo from './Todo';
import { selectTodos } from './todosSlice';

const Todos: React.FC = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <div>
      <h3>TODO</h3>
      <AddTodo />
      <section>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Todos;
