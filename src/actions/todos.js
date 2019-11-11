import axios from 'axios';

import {
  CREATE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  RETRIVE_TODO,
  COMPLETE_TODO,
  SET_TEXT,
  SET_FORM_STATUS,
  SET_LOAD_STATUS,
  SET_SELECTED
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function getTodos(formStatus = "add") {
  return function (dispatch) {
    dispatch({ type: SET_FORM_STATUS, formStatus, })
    axios.get(`${ROOT_URL}/todos`)
      .then(response => {
        dispatch({
          type: RETRIVE_TODO,
          todos: response.data.todos,
          total: response.data.todos.length,
          completed: response.data.completedNum
        });
        dispatch({ type: SET_LOAD_STATUS, loadStatus: 'loaded' })
      })
      .catch((err) => {
        dispatch({ type: SET_LOAD_STATUS, loadStatus: 'failed', msg: `HTTP ${err.status}: ${err.statusText}` })
      });
  }
}

export function createTodo(text) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/todos`, { text, completed: false })
      .then(response => {
        const todo = response.data;
        dispatch({ type: CREATE_TODO, todo, });
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export function updateTodo(id, text) {

  return function (dispatch) {
    axios.put(`${ROOT_URL}/todos/${id}`, { text, })
      .then(response => {
        const todo = { id, text };
        dispatch({ type: UPDATE_TODO, todo, });
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export function toggleCompleted(todoId, completed, EndDate) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/todos/toggleCompleted`, { todoId, completed, EndDate })
      .then(response => {
        dispatch({ type: COMPLETE_TODO, todoId, completed, EndDate });
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export function removeTodo(todoId, completed) {

  return function (dispatch) {
    axios.delete(`${ROOT_URL}/todos/${todoId}`)
      .then(response => {
        dispatch({ type: REMOVE_TODO, todoId, completed });
      })
      .catch(() => {
        console.log('noooo')
      });
  }
}

export function handleSelected(selected) {
  return function (dispatch) {
    dispatch({ type: SET_SELECTED, selected, })
  }
}

export function handleFormStatus(formStatus) {
  return function (dispatch) {
    dispatch({ type: SET_FORM_STATUS, formStatus, })
  }
}

export function handleLoadStatus(loadStatus) {
  return function (dispatch) {
    dispatch({ type: SET_LOAD_STATUS, loadStatus, })
  }
}