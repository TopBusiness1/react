import axios from 'axios';

import {
  CREATE_TASK,
  READING_TASK,
  READING_ONE_TASK,
  UPDATE_TASK,
  REMOVE_TASK,
  GET_TASK_ITEM_DATE,

  SHOW_TASK_MODAL,
  HIDE_TASK_MODAL
} from './types';

const ROOT_URL = 'http://localhost:3090';

const jwt_decode = require('jwt-decode');

export function created(text) {
  const userId = jwt_decode(localStorage.getItem('token'));
  const usercreate = {
    title: text.title,
    content: text.content,
    assignId: userId.sub
  }
  return function (dispatch) {
    axios.post(`${ROOT_URL}/task/create`, usercreate)
      .then(response => {
        dispatch({
          type: CREATE_TASK,
          tasks: response.data
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export function reading_all() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/task/reading`)
      .then(response => {
        dispatch({
          type: READING_TASK,
          tasks: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function reading() {
  const userId = jwt_decode(localStorage.getItem('token'));
  let id = userId.sub
  return function (dispatch) {
    axios.put(`${ROOT_URL}/task/readingOne/${id}`)
      .then(response => {
        dispatch({
          type: READING_ONE_TASK,
          tasks: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function update_task(task, id) {
  const tasks = {
    id: id,
    title: task.title,
    content: task.content,
    completedOn: task.completedOn
  }
  return function (dispatch) {
    axios.put(`${ROOT_URL}/task/update/${id}`, tasks)
      .then(response => {
        dispatch({
          type: UPDATE_TASK,
          tasks, id
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function remove(id) {
  return function (dispatch) {
    axios.delete(`${ROOT_URL}/task/destroy/${id}`)
      .then(response => {
        dispatch({
          type: REMOVE_TASK, id
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//show or hide show
export function showTaskModal() {
  return {
    type: SHOW_TASK_MODAL
  };
}

export function hideTaskModal() {
  return {
    type: HIDE_TASK_MODAL
  };
}




//report page task item
export function getTaskItem_date(date) {
  const userId = jwt_decode(localStorage.getItem('token'));
  let id = userId.sub
  return function (dispatch) {
    axios.put(`${ROOT_URL}/report/getItem_date/${id}`, { date })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: GET_TASK_ITEM_DATE,
          reports: response.data
        });
      })
  }
}