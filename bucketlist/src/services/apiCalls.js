import apiClient from './apiClient';
import END_POINTS from './endpoints';

const { get } = apiClient;
const { post } = apiClient;
const { patch } = apiClient;
const deleteMethod = apiClient.delete;

export const USER_APIs = {
  userLogin(loginDetails) {
    return post(END_POINTS.userLogin, loginDetails);
  },
  userSignUp(signUpDetails) {
    return post(END_POINTS.userSignUp, signUpDetails);
  },
  getUserProfile() {
    return get(END_POINTS.getUserProfile);
  },
  getUserPicture(id) {
    return get(END_POINTS.getUserPicture + id);
  },
  userLogout() {
    return post(END_POINTS.userLogout);
  },
  userLogoutAllSessions() {
    return post(END_POINTS.userLogoutAllSessions);
  },
};

export const TASKS_APIs = {
  getUserTasks() {
    return get(END_POINTS.tasks);
  },

  addNewTask(task) {
    return post(END_POINTS.tasks, task);
  },

  updateTaskById(taskID, updatedTask) {
    return patch(END_POINTS.updateTaskById + taskID, updatedTask);
  },

  deleteTaskById(taskID) {
    return deleteMethod(END_POINTS.updateTaskById + taskID);
  },
};
