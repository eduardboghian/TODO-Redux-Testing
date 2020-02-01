import React, { useState, useEffect } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import { useSelector } from 'react-redux'


const ToDoList = () => {
    const todos = useSelector(state=>state.todos)
    const [toDoList, setToDo] = useState([])

    useEffect(() => {
        setToDo(todos)
    }, [todos])

    return (
        <div >
            {toDoList.map( (data) => {
                return <ToDo todo={data} key={data.id} />  
            })}
            <ToDoForm />
        </div>
    )
}

export default ToDoList