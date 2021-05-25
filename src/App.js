//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {TodoListStore } from './component/Todolist';
import { TodoFilter } from './component/TodoFilter';
import { AddTodoForm } from './component/AddTodo';

function App() {
  return (
    <Provider store={store } >
      <div className="App">
        <TodoFilter />
        <TodoListStore />
        <AddTodoForm />
    </div>
    </Provider>
   
  );
}

export default App;
