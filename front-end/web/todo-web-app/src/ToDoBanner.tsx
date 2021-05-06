import { ToDo } from "./ToDo"
import React from "react"

export const ToDoBanner = (props: { username: string, toDos: ToDo[] }) =>
    <h4 className="bg-primary text-white text-center p-2">
        {props.username}'s To-do List
        ({props.toDos.filter(it => !it.isDone).length} left)
    </h4>