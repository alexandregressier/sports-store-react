import React, { Component } from "react"

interface ToDo {
    text: string
    isDone: boolean
}


interface AppState {
    username: string
    toDos: ToDo[]
    newToDoText: string
}

export default class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            username: "Alex",
            toDos: [
                { text: "Buy Flowers", isDone: false },
                { text: "Get Shoes", isDone: false },
                { text: "Collect Tickets", isDone: true },
                { text: "Call Joe", isDone: false },
            ],
            newToDoText: ""
        }
    }

    createNewTodo = () =>
        this.state.newToDoText
        && !this.state.toDos.find(toDo => toDo.text === this.state.newToDoText)
        && this.setState({
            toDos: [...this.state.toDos, { text: this.state.newToDoText, isDone: false }],
            newToDoText: ""
        })

    toggleTodo = (toDo: ToDo) => this.setState({
        toDos: this.state.toDos.map(it => it.text === toDo.text ? { ...it, isDone: !it.isDone } : it)
    })

    showToDoRows = () => this.state.toDos.map(toDo =>
        <tr key={toDo.text}>
            <td>{toDo.text}</td>
            <td><input type="checkbox" checked={toDo.isDone} onChange={() => this.toggleTodo(toDo)}/></td>
        </tr>
    )

    render = () =>
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                {this.state.username}'s To-do List
                ({this.state.toDos.filter(t => !t.isDone).length} left)
            </h4>
            <div className="container-fluid">
                <div className="my-1">
                    <input type="text" className="form-control" value={this.state.newToDoText}
                           onChange={e => this.setState({ newToDoText: e.target.value })}
                           placeholder="Something to do..."/>
                    <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
                        Add
                    </button>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Done</th>
                    </tr>
                    </thead>
                    <tbody>{this.showToDoRows()}</tbody>
                </table>
            </div>
        </div>
}