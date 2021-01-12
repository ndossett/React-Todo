import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(todo =>
                (<Todo key={todo.id} todo={todo} handleToggle={props.handleToggle}/>
            ))}
            <button onClick={props.handleCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList