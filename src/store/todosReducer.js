
let id = 2;
const initialState = [
  {
    id: 1,
    title: 'Tutoriel',
    completed: false,
  },
  {
    id: 2,
    title: 'Learn',
    completed: true
  }
];

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function todosReducer(state = initialState, action)
{
  switch (action.type) {
    case ADD_TODO:
    return[...state, {id:++id, completed:false, ...action.payload}]
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...state, ...action.payload}
        } else {
          return todo
        }
      })
    case DELETE_TODO:
      return state.filter(todo => todo.id === action.payload )
    default:
      return state;
  }
  
}