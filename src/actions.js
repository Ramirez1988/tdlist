import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  CHECK_TASK,
  INPUT_TASK
} from "./actionsTypes";
export const addTask = payload => {
  return { type: ADD_TASK, payload };
};
export const removeTask = payload => {
  return { type: REMOVE_TASK, payload };
};
export const editTask = payload => {
  return { type: EDIT_TASK, payload };
};
export const checkTask = payload => {
  return { type: CHECK_TASK, payload };
};
export const inputTask = payload => {
  return { type: INPUT_TASK, payload };
};
