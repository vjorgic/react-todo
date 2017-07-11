var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompletedRef.checked;
    var searchText = this.refs.searchRef.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div className='container__header'>
        <div>
          <input type="search" ref="searchRef" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompletedRef" onChange={this.handleSearch}/>
            Show Completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
