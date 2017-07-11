var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Bird';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchRef.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchRef);

    expect(spy).toHaveBeenCalledWith(false, 'Bird');

  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompletedRef.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompletedRef);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
