import React from "react";
const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`;

    return (
      <tr key={val.index}>
        <td>
          <input
            type="text"
            name="Input"
            data-id={idx}
            id={projectName}
            className="form-control "
          />
        </td>
        <td>
          <input
            type="text"
            name="Output"
            id={task}
            data-id={idx}
            className="form-control "
          />
        </td>

        <td>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default TaskList;
