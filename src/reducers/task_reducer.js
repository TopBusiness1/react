import {
  CREATE_TASK,
  READING_TASK,
  READING_ONE_TASK,
  UNAUTH_USER,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK_ITEM_DATE,

  SHOW_TASK_MODAL,
  HIDE_TASK_MODAL,
} from '../actions/types';


export default function (state = {}, action) {

  switch (action.type) {
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.tasks] };
    case READING_TASK:
      return { ...state, tasks: action.tasks };
    case READING_ONE_TASK:
      return { ...state, tasks: action.tasks };
    case UPDATE_TASK:
      const updatefunc = updateChange(state.tasks, action.id, action.tasks);
      return { ...state, tasks: updatefunc };
    case REMOVE_TASK:
      const tasktable = state.tasks.filter(task => (task._id != action.id));
      return { ...state, tasks: tasktable };
    case GET_TASK_ITEM_DATE:
      return { ...state, reports: action.reports };

    case SHOW_TASK_MODAL:
      return { ...state, showTaskModal: true };
    case HIDE_TASK_MODAL:
      return { ...state, showTaskModal: false };
  }

  return state;

}

function updateChange(tasks, id, taskone) {
  const taskstables = [...tasks];
  const taskUpdateTable = taskstables.filter(task => (task._id == id))[0];
  if (taskone.title == undefined) {
    taskUpdateTable["completedOn"] = taskone.completedOn;
  }
  else {
    taskUpdateTable["title"] = taskone.title;
    taskUpdateTable["content"] = taskone.content;
  }
  return taskstables;
}
