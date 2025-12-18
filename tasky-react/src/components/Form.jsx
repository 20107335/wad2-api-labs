import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            required
            value={props.formState?.title || ""}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            required
            value={props.formState?.deadline || ""}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Details:
          <input
            type="text"
            name="description"
            value={props.formState?.description || ""}
            onChange={(event) => props.change(event)}
          />
        </label>
        <br />
        <label>
          Priority:
          <select
            name="priority"
            value={props.formState?.priority || ""}
            onChange={(event) => props.change(event)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTaskForm;