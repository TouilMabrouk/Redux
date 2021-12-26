import { type } from "@testing-library/user-event/dist/type";
import { ADD_TASK, COMPLITE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionTypes"


export const deleteTask = (id) =>{
    return {
        type:DELETE_TASK,
        payload: id,
        
    };
};
export const addTask = (newTask) => {
return {
    type:ADD_TASK,
    payload:newTask,
};
};
export const completeTask=(id)=>{
    return{
    type: COMPLITE_TASK ,
    payload:id,
    };
};
export const editTask =(editedTask) => {
    return{
        type:EDIT_TASK,
        payload:editedTask,
    };
};
export const filterTask=()=>{
    return{
        type:FILTER_TASK,
    }
}
