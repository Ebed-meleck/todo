import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
//import { ADD_TODO, UPDATE_TODO } from '../store/todosReducer';
import { filteredTodoSelector, todoSelector } from '../store/todosSelectors';
import { toggleActions, _deleteTodoAction } from '../store/todosAction';

const TodoItem = ({ todo, onToggle , onDelete}) => {
  
  return (
  
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
      </label>
      {todo.title}
      <button onClick={ ()=> onDelete(todo) } >X</button>
    </li>
  );
}



export function TodoList({todos, onToggle, onDelete,props}) {

 
  return (
    
    <ul>
      
      {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id}   onDelete={onDelete} />)}
    </ul>
  );
}


export const TodoListStore = () => {
  
 const todos = useSelector(filteredTodoSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback((todo) => {
    dispatch(toggleActions(todo));
  }, []);

  const onDelete = useCallback(todo => {
    dispatch(_deleteTodoAction(todo))
  },[])

  return <TodoList  todos={todos} onToggle={onToggle} onDelete={onDelete} />

}

/**
 * export const TodoListStore = connect(
  (state) => ({
    todos: todoSelector(state)
  }),
  (dispatch) => ({
    onToggle: todo => dispatch(toggleActions(todo))
  })
)(TodoList);
 */
