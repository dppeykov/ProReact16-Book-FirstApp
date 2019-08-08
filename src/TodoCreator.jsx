import React, { Component } from "react";

export class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({ newItemText: "" });
  };

  render = () => (
    <div className="d-flex flex-wrap justify-content-center align-items-center p-4 m-0">
      <input
        className="form-control w-75 p-4 border-info"
        value={this.state.newItemText}
        onChange={this.updateNewTextValue}
        placeholder="Add new item here ..."
      />
      <button
        className="btn btn-light border-info ml-1"
        onClick={this.createNewTodo}
      >
        <img
          src="https://img.icons8.com/color/36/000000/plus--v2.png"
          alt="ADD"
        />
      </button>
    </div>
  );
}
