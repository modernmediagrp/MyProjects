import { connect } from 'react-redux'
import { toggleTodo, saveTodo, editTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => ( t.completed || t.editing))
    case 'SHOW_ACTIVE':
      return todos.filter(t => !(t.completed || t.editing))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
  editing:state.editing
})

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
  onSaveTodoClick: saveTodo,
  onTodoEditClick: editTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
