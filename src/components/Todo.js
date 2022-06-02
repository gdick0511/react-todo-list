
import React from 'react'

function Todo({ todo }) {
    return (
        <div>
            <input />
            <li>{todo.task}</li>
            <button>X</button>
        </div>
    )
}

export default Todo
