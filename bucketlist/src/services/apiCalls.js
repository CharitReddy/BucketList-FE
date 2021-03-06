import apiClient from './apiClient';
import END_POINTS from './endpoints';

const { get } = apiClient;
const { post } = apiClient;
const { patch } = apiClient;
// const { delete } = apiClient;

export const USER_APIs = {
  userLogin(loginDetails) {
    return post(END_POINTS.userLogin, loginDetails);
  },
  userSignUp(signUpDetails) {
    return post(END_POINTS.userSignUp, signUpDetails);
  },
};

export const TASKS_APIs = {
  getUserTasks() {
    return get(END_POINTS.getUserTasks);
  },
};
