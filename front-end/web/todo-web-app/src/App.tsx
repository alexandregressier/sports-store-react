import React, { useEffect, useState } from "react"
import { ToDo } from "./ToDo"
import { ToDoBanner } from "./ToDoBanner"
import { ToDoRow } from "./ToDoRow"
import { ToDoCreator } from "./ToDoCreator"
import { VisibilityControl } from "./VisibilityControl"
import * as O from "fp-ts/lib/Option"
import { pipe } from "fp-ts/function"

export const App = () => {
    const [username,] = useState("Alex")
    const [toDos, setTodos] = useState([] as ToDo[])
    const [showCompleted, setShowCompleted] = useState(true)

    useEffect(() => {
        setTodos(pipe(
            O.fromNullable(localStorage.getItem("toDos")),
            O.map(it => JSON.parse(it)),
            O.getOrElse(() => ([
                { text: "Buy Flowers", isDone: false },
                { text: "Get Shoes", isDone: false },
                { text: "Collect Tickets", isDone: true },
                { text: "Call Joe", isDone: false },
            ] as ToDo[]))
        ))
    }, [])

    useEffect(() => {
        toDos.length > 0 && localStorage.setItem("toDos", JSON.stringify(toDos))
    }, [toDos])

    const createNewTodo = (toDoText: string) =>
        toDoText && !toDos.find(it => it.text === toDoText) && setTodos([...toDos, { text: toDoText, isDone: false }])

    const toggleTodo = (toDo: ToDo) =>
        setTodos(toDos.map(it => it.text === toDo.text ? { ...it, isDone: !it.isDone } : it))

    const todoTableRows = (isDoneState: boolean) => toDos
            .filter(it => it.isDone === isDoneState)
            .map(it => <ToDoRow key={it.text} toDo={it} onChange={toggleTodo}/>)

    return <div>
        <ToDoBanner username={username} toDos={toDos}/>
        <div className="container-fluid">
            <ToDoCreator onAdd={createNewTodo}/>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
                </thead>
                <tbody>{todoTableRows(false)}</tbody>
            </table>
            <div className="bg-secondary text-white text-center p-2">
                <VisibilityControl description="Completed" isChecked={showCompleted}
                                   onChange={(isChecked) => setShowCompleted(isChecked)}/>
            </div>
            {showCompleted && <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
                </thead>
                <tbody>{todoTableRows(true)}</tbody>
            </table>}
        </div>
    </div>
}