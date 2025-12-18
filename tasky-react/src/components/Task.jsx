import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>

            {/* Fixed priority display - using lowercase values to match form */}
            <p
                style={{
                    backgroundColor:
                        props.priority === "high"
                            ? "red"
                            : props.priority === "medium"
                            ? "goldenrod"
                            : props.priority === "low"
                            ? "green"
                            : "gray", // default color if no priority
                    padding: "0.2em",
                    borderRadius: "0.4em",
                    display: "inline-block",
                    minWidth: "60px",
                    fontWeight: "bold",
                    textTransform: "capitalize"
                }}
            >
                {props.priority}
            </p>

            <button onClick={props.markDone} className="doneButton">Done</button>
            <button onClick={props.deleteTask} className="deleteButton">Delete</button>
        </div>
    );
}

export default Task;