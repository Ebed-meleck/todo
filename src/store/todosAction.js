import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todosReducer";

export const toggleActions = (todo) => ({
  type: UPDATE_TODO,
  payload: { ...todo, completed: !todo.completed }
});

export const _deleteTodoAction = (todo) => ({
  type: DELETE_TODO,
  payload: todo.id
});

export const addTodoAction = (title) => ({
  type: ADD_TODO,
  payload: { title },
});