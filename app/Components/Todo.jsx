var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timeStamp = createdAt;

      if(completedAt) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        this.props.onToggle(id);
      }}>
        <div>
            <input type="checkbox" defaultChecked={completed}/>
        </div>
        <div className="todo__subtext">
          <p>{text}</p>
          <p>{renderDate()}</p>
        </div>

      </div>
    );
  }
});

module.exports = Todo;
