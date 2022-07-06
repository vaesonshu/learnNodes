// 给每个 todo 对象一个唯一的 id
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      // ...
      this.newTodo = ''
    },
    removeTodo(todo) {
      // ...
    }
  }
}
