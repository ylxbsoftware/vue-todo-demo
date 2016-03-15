var Vue = require('vue');

require('../css/index.css');

new Vue({
  el: '#todo',
  data: {
    todos: [{
      text: '学习javascript',
      complete: true,
      isFont: true,
      isShow: false,
      editContent: ''
    }],
    editText: ''
  },
  methods: {
    addTodo: function() {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text, complete: false, isFont: false, isShow: false, editContent: '' });
        this.newTodo = '';
      }
    },

    removeTodo: function(index) {
      this.todos.splice(index, 1);
    },

    isDone: function(todo) {

      if (todo.complete) {
        todo.complete = false;
        todo.isFont = false;
      } else {
        todo.complete = true;
        todo.isFont = true;
      }
    },

    editTodo: function(e, todo) {
      if (!todo.complete) {
        todo.isShow = true;
        todo.edit = todo.text;
      }
    },

    updateContent: function(todo) {

      todo.text = todo.edit;
      todo.editContent = '';
      todo.isShow = false;
    }
  }
});
