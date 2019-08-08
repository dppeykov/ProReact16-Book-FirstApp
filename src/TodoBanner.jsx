import React, { Component } from "react";
import Logo from "./logo.png";

export class TodoBanner extends Component {
  render = () => (
    <div className="bg-warning text-dark text-center p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="ToDoApp" height="55px" />
        <h4 className="ml-2">To Do List</h4>
      </div>

      <div className="d-flex flex-column align-items-center align-self-center">
        <div className="badge badge-pill badge-danger pl-3 mb-2 border border-dark">
          To do:
          <span className="badge badge-light ml-3">
            {this.props.tasks.filter(t => !t.done).length}
          </span>
        </div>
        <div className="badge badge-pill badge-success pl-3 border border-dark">
          Done:
          <span className="badge badge-light ml-3">
            {this.props.tasks.filter(t => t.done).length}
          </span>
        </div>
      </div>
    </div>
  );
}
