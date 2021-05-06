import React, { Component } from "react"
import { ToDo } from "./ToDo"
import { ToDoBanner } from "./ToDoBanner"
import { ToDoRow } from "./ToDoRow"
import { ToDoCreator } from "./ToDoCreator"

export default class App extends Component<{}, { username: string, toDos: ToDo[] }> {

    constructor(props: {}) {
        super(props)
        this.state = {
            username: "Alex",
            toDos: [
                { text: "Buy Flowers", isDone: false },
                { text: "Get Shoes", isDone: false },
                { text: "Collect Tickets", isDone: true },
                { text: "Call Joe", isDone: false },
            ]
        }
    }

    createNewTodo = (toDoText: string) =>
        toDoText && !this.state.toDos.find(toDo => toDo.text === toDoText) && this.setState({
            toDos: [...this.state.toDos, { text: toDoText, isDone: false }]
        })

    toggleTodo = (toDo: ToDo) =>
        this.setState({
            toDos: this.state.toDos.map(it => it.text === toDo.text ? { ...it, isDone: !it.isDone } : it)
        })

    render = () =>
        <div>
            <ToDoBanner username={this.state.username} toDos={this.state.toDos}/>
            <div className="container-fluid">
                <ToDoCreator onAdd={this.createNewTodo}/>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.toDos.map(toDo =>
                        <ToDoRow key={toDo.text} toDo={toDo} onChange={this.toggleTodo}/>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
}