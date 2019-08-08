import React, { Component } from "react";
import Logo from "./logo.png";

export class TodoBanner extends Component {
  render = () => (
    <div className="bg-info text-white text-center p-3">
      <div>
        <h4>To Do List</h4>
        <img src={Logo} alt="ToDoApp" />
      </div>

      <div>
        <p>{this.props.tasks.filter(t => !t.done).length}</p>
        <p>{this.props.tasks.filter(t => t.done).length}</p>
      </div>
    </div>
  );
}
