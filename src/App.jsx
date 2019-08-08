import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      newItemText: ""
    };
  }

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  toggleTodo = todo =>
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = () =>
    this.state.todoItems.map(item => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <h4 className="bg-info text-white text-center p-3">
          To Do App ({this.state.todoItems.filter(t => !t.done).length} items to
          do)
        </h4>
        <div className="container text-center p-2">
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <input
              className="form-control w-75"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            />
            <button
              className="btn btn-success ml-2"
              onClick={this.createNewTodo}
            >
              +
            </button>
          </div>
          <table className="table table-striped table-bordered mt-3">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
