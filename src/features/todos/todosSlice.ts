import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { NewTodo, Todo } from './models';

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = { todos: [] };

function update(todos: Todo[], id: string, update: (todo: Todo) => void) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    update(todo);
  }
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<NewTodo>) => {
      state.todos.push({ ...action.payload, id: nanoid(), completed: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    doTodo: (state, action: PayloadAction<string>) =>
      update(state.todos, action.payload, todo => (todo.completed = true)),
    undoTodo: (state, action: PayloadAction<string>) =>
      update(state.todos, action.payload, todo => (todo.completed = false)),
    renameTodo: (state, action: PayloadAction<{ id: string; label: string }>) =>
      update(state.todos, action.payload.id, todo => (todo.label = action.payload.label)),
  },
});

export const { addTodo, removeTodo, doTodo, undoTodo, renameTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectTodo = (state: RootState, id: string) => state.todos.todos.find(todo => todo.id === id);

export default todosSlice.reducer;
