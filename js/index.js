var Vue = require('vue');
var VueRouter = require('Vue-router');
Vue.use(VueRouter);
require('../css/index.css');
var YES = require('../yes.vue');

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

    updateContent: function(e, todo) {

      todo.text = e.target.value;
      todo.editContent = '';
      todo.isShow = false;
    }
  }
});

var all = Vue.extend({
  template: '<p>这是一个神奇的世界</p>'
});

var no = Vue.extend({
  template: '<p>这是一个很不错的世界</p>'
});

var app = Vue.extend({});

var router = new VueRouter();

router.map({
  '/all': { component: all },
  '/yes': { component: YES },
  '/no': { component: no }
});

router.start(app, '#list');
