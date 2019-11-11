import {
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  RETRIVE_TODO,
  COMPLETE_TODO,
  SET_SELECTED,
  SET_FORM_STATUS,
  SET_LOAD_STATUS
} from '../actions/types';

export default function (state = {}, action) {

  switch (action.type) {

    case RETRIVE_TODO:
      const { todos, total, completed } = action;
      return { ...state, todos, total, completed };

    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.todo], total: state.total + 1 };

    case UPDATE_TODO:
      const updatedTodos = setChanges(state.todos, action.todo.id, 'text', action.todo.text);
      return { ...state, todos: updatedTodos };

    case REMOVE_TODO:
      const todosAfterRemove = state.todos.filter(todo => (todo._id != action.todoId));
      const dif = action.completed ? (-1) : 0;
      return { ...state, todos: todosAfterRemove, total: state.total - 1, completed: state.completed + dif };

    case COMPLETE_TODO:
      const changedTodos = setChanges(state.todos, action.todoId, 'completed', action.completed, 'EndDate', action.EndDate);
      const diff = action.completed ? 1 : (-1);
      return { ...state, todos: changedTodos, completed: state.completed + diff, EndDate: state.EndDate };

    case SET_SELECTED:
      return { ...state, selected: action.selected }

    case SET_FORM_STATUS:
      return { ...state, formStatus: action.formStatus }

    case SET_LOAD_STATUS:
      return { ...state, loadStatus: action.loadStatus, loadMsg: action.msg }

    default: return state;
  }

  return state;

}

function setChanges(total, todoId, fiedlName, fieldValue) {
  const todos = [...total];
  const todoForUpdate = todos.filter(todo => (todo._id == todoId))[0];
  todoForUpdate[fiedlName] = fieldValue;
  return todos;
}