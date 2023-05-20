import React from "react";

export const Completed = (props)=>{
    const handleRender = (todoList)=>{
    return  todoList.completed.map(data=>(
        <TodoListTable justify="space-around" key={data.title}>
            <p>{data.title}</p>
            <button onClick={(e)=>props.handleUndo(e,data.title)}>Undo</button>
        </TodoListTable>
        ))
    }
    return (
        <>
        {handleRender(props.completedList)}
        </>
    )
}
