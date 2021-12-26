import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask, editTask } from '../redux/action';

const Task = ({task}) => {
    const [inputAction, setInputAction] = useState(task.action)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose=()=> setOpen(false)
    console.log(task);
    const dispatch = useDispatch()
    const handleEdit=()=> {
        const editedTask ={
            id:task.id,
            action:inputAction,
            isDone:task.isDone,
        }
        dispatch(editTask(editedTask))
        handleClose()
    }
    return (
        <div>
            {
                open? <div>
                    <input value={inputAction} type="text" onChange={(e)=>setInputAction(e.target.value)} />
                    <button onClick={handleEdit} >Confirm</button>
                    <button onClick={handleClose} >Cancel</button>
                </div>
        :<div> 
            <h3 className={task.isDone && "done" } > {task.action} </h3>
              <button onClick={()=>dispatch(deleteTask(task.id))} > Delete </button>
              <button onClick={()=>dispatch(completeTask(task.id))} > {task.isDone?"Undo":"Complete"} </button>
              <button onClick={handleOpen} >Edit</button>
            </div>
            }
        </div>
    );
};

export default Task
