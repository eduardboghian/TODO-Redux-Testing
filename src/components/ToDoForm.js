import React, { useState } from 'react'
import uuid from 'uuid'
import { useDispatch } from 'react-redux'

export default function ToDoForm({todo}) {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()

    function sendTodo(e) {
        e.preventDefault()
        const todo = {
            id: uuid(),
            name: newTodo,
            complete: false
        }

        setNewTodo(' ')
        dispatch({ type: 'ADD_TODO', payload: todo })
    }

    return (
        <div> 
            <form>
                <input 
                    type="text" 
                    className='add-field' 
                    placeholder='Add ToDo'
                    value= {newTodo}
                    onChange={ e=> {
                        setNewTodo(e.target.value)
                    }}
                />
                <input 
                    type="submit" 
                    className='add-button'
                    onClick={ e=> sendTodo(e) }
                />
            </form>
        </div>
    )
}
