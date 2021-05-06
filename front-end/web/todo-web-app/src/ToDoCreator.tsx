import React, { useState } from "react"

export const ToDoCreator = (props: { onAdd: (toDoText: string) => void }) => {
    const [newToDoText, setNewToDoText] = useState("")

    return <div className="my-1">
        <input type="text" className="form-control" value={newToDoText} onChange={e => setNewToDoText(e.target.value)}
               placeholder="Something to do..."/>
        <button className="btn btn-primary mt-1" onClick={() => {
            props.onAdd(newToDoText)
            setNewToDoText("")
        }}>
            Add
        </button>
    </div>
}