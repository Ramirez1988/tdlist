import {
  ADD_TASK,
  REMOVE_TASK,
  EDIT_TASK,
  CHECK_TASK,
  INPUT_TASK
} from "./actionsTypes";
const initialState = { Tasks: [], Input: "" };
const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, Tasks: state.Tasks.concat(action.payload),Input:'' };
    case INPUT_TASK:
      return { ...state, Input: action.payload };
    case REMOVE_TASK:
      return {
        ...state,
        Tasks: state.Tasks.filter((el, i) => i !== action.payload)
      };
    case EDIT_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map((el, i) => {
          if (el.id === action.payload.id) {
            return { ...el, text: action.payload.text, isComplete: false };
          } else return el;
        })
      };
    case CHECK_TASK:
      return {
        ...state,
        Tasks: state.Tasks.map(el => {
          if (el.id === action.payload) {
            return { ...el, isComplete: !el.isComplete };
          } else return el;
        })
      };
    default:
      return state;
  }
};
export default TodoReducer;
