import { ADD_TODO } from '../constants';

export function addToDo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}
