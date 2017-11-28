var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed flag', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(true);
    })
  });

  describe('todosReducer', () =>{
    it('should add new todo', () => {
      var action = {
        type:'ADD_TODO',
        text:'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };

      var res = reducers.todosReducer(df([
        {
          id: '1',
          text: 'Something',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]), df(action));

      expect(res[0].completedAt).toNotEqual(undefined);
      expect(res[0].completed).toEqual(true);
    })
  });
});
