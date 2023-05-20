import React from "react";

export const PendingList = (props)=>{
    const handleRender = (todoList)=>{
        return todoList.PendingList.map(data=>(
            <TodoListTable>
                <p>{data.title}</p>
                <button onClick={(e)=>props.handleAdd(e,data.title)}>Add</button>
                <button onClick={(e)=>props.handleDelete(e,data.title)}>Delete</button>
            </TodoListTable>
        ))
    }
    return(
        <>
        {handleRender(props.todoList)}
        </>
    )
}   