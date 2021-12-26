import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, filterTask } from '../redux/action'

const AddTask = () => {
    const {tasks} = useSelector(state => state)
    const completeCounter = tasks.filter(el=>el.isDone).length
    const [text, settext] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id:Math.random(),
            action:text,
            isDone:false
        }
        dispatch(addTask(newTask))
        settext('')
    }
    return (
        <div>
            <h1>To Do Liste</h1>
            <p> Total Tasks { tasks.length} </p>
            <p>Completed Tasks {completeCounter} </p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
                <button>Add</button>
            </form>
                <button onClick={()=>dispatch(filterTask())} >Filter</button>
        </div>
    )
}

export default AddTask
