import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    task: 'Style Todo List',
    id: 1001,
    completed: false
  },
  {
    task: 'Turn in Assignment',
    id: 1002,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {tasks}
  }

  handleToggle = (todoId) => {
    this.setState({
      tasks: this.state.tasks.map(todo => {
        if (todoId === todo.id) {
          return ({
            ...todo, completed: !todo.completed
          })
        }else {
          return(todo)
        }
      })
    })
  }

  handleAdd = name => {
    this.setState({
      tasks: [...this.state.tasks, {task: name, id: Date.now(), completed: false}]
    })
  }

  handleCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(todo=>
        (!todo.completed))
    })
  }

  render() {
    return (
      <div className ='App'>
        <div className='header'>
          <h1>Todo App!</h1>
          <TodoForm handleAdd={this.handleAdd}/>
        </div>
        <TodoList handleCompleted={this.handleCompleted} tasks={this.state.tasks} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
