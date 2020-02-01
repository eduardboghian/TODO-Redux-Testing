import React from 'react'
import { useDispatch } from  'react-redux'

export default function ToDo({todo}) {
    const dispatch = useDispatch()
    return (
        <div className={ todo.complete ? 'todos completed' : 'todos' }>
            {todo.name}
            <button 
                className='delete'
                onClick={ e=> { dispatch({ type: 'DELETE_TODO', payload: todo.id }) }}
            >Delete</button>
            <button 
                className='complete'
                onClick={ e=> { dispatch({ type: 'TOGGLE_TODO', payload: todo.id }) }}
            >Complete</button>
        </div>
    )
}
