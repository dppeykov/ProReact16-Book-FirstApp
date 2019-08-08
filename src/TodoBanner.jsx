import React, { Component } from "react";
import Logo from "./logo.png";

export class TodoBanner extends Component {
  render = () => (
    <div className="bg-info text-white text-center p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="ToDoApp" height="58px" />
        <h4 className="ml-2">To Do List</h4>
      </div>

      <div className="d-flex align-items-center">
        <div className="mr-3">
          To do: <br /> {this.props.tasks.filter(t => !t.done).length}
        </div>
        <div>
          Done: <br /> {this.props.tasks.filter(t => t.done).length}
        </div>
      </div>
    </div>
  );
}
