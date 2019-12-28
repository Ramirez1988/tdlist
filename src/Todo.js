import React from "react";
import { connect } from "react-redux";
import { addTask, removeTask, checkTask, inputTask } from "./actions";

function Todo({
  text = "",
  Tasks = [],
  removeTask = () => {},
  inputTask = () => {},
  addTask = () => {},
  checkTask = () => {}
}) {
  let id = Math.random();
  return (
    <div>
      <div className="intro-container">
        <h1>To-Do App!</h1>
        <h3>Add New To-Do</h3>
        <input
          value={text}
          type="text"
          placeholder="Enter new task"
          className="text-area"
          onChange={e => inputTask(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => addTask({ text, id, isComplete: false })}
          className="btn-intro"
        >
          Add
        </button>
      </div>
      <p>Let's get some work done!</p>
      <div>
        {Tasks.map((el, i) => (
          <div className="dynamic-btn">
            <button onClick={() => checkTask(el.id)} className="btn">
              {el.isComplete ? "Undo" : "Complete"}
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                removeTask(i);
              }}
              className="nor"
            >
              Delete
            </button>
            <span style={{ textDecoration: el.isComplete && "line-through" }}>
              {el.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Tasks: state.Tasks,
    text: state.Input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(addTask(payload)),
    inputTask: payload => dispatch(inputTask(payload)),
    removeTask: payload => dispatch(removeTask(payload)),
    checkTask: payload => dispatch(checkTask(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
