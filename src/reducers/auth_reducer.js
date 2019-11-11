import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_ADMIN_MESSAGE,
  SET_ADMIN_PRIVILEGES,
  GET_USER,
  GET_USER_UPDATE,

  SHOW_TASK_MODAL,
  HIDE_TASK_MODAL
} from '../actions/types';


export default function (state = { authenticated: false, admin_privileges: false }, action) {

  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, admin_privileges: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGE:
      return { ...state, message: action.payload };
    case FETCH_ADMIN_MESSAGE:
      return { ...state, message: action.payload };
    case SET_ADMIN_PRIVILEGES:
      return { ...state, admin_privileges: true };
    case GET_USER:
      return { ...state, users: action.users, authenticated: true };
    case GET_USER_UPDATE:
      console.log(action.user);
      return { ...state, users: action.user, authenticated: true };

    case SHOW_TASK_MODAL:
      return { ...state, showTaskModal: true };
    case HIDE_TASK_MODAL:
      return { ...state, showTaskModal: false };
  }

  return state;

}
