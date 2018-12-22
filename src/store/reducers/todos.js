import { ADD_TODO } from '../constants';
import fakeTodos from '../../data/todos.json';

const initialState = fakeTodos.todos;

export default function todos(state = initialState, { type, todo }) {
  if (type === ADD_TODO) {
    return [todo, ...state];
  }

  return state;
}
