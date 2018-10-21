import undoable, { includeAction } from 'redux-undo'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'SAVE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        text:action.text
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'SAVE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}



const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos