var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoRef.value;

    if(todoText.length > 0) {
      this.refs.todoRef.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoRef.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoRef" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
