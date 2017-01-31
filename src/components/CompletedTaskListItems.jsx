var React = require('react');

var CompletedTaskListItems = (props) => {
  return (
    <div className="task list entry">
      <h1>Task:</h1>
      <div className="list-body completed">
        <div className="task-entry-task">{props.task} <p>Total Time:</p>{props.time}</div>
        <div className="task-entry-time"></div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

CompletedTaskListItems.propTypes = {
  task: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CompletedTaskListItems = CompletedTaskListItems;