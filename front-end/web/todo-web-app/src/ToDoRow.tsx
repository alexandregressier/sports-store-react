import { ToDo } from "./ToDo"
import React from "react"

export const ToDoRow = (props: { toDo: ToDo, onChange: (toDo: ToDo) => void }) =>
    <tr>
        <td>{props.toDo.text}</td>
        <td><input type="checkbox" checked={props.toDo.isDone} onChange={() => props.onChange(props.toDo)}/></td>
    </tr>