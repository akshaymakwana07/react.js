// src/reducers.js
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todoReducer;
