import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    list: ["temp1"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSubtraction = () => {
    this.state.count > 0 && this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <div>
          <button
            onClick={this.handleIncrement}
            style={{ fontSize: 10 }}
            className="btn btn-outline-primary m-2"
          >
            +
          </button>
          <button
            onClick={this.handleSubtraction}
            style={{ fontSize: 10 }}
            className="btn btn-outline-danger m-1"
          >
            -
          </button>
        </div>
        {this.state.list.length === 0 && "No logs found"}
        {this.renderList()}
      </React.Fragment>
    );
  }

  renderList() {
    return (
      <ul>
        {this.state.list.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.state.count <= 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count <= 0 ? "Zero days" : count;
  }
}

export default Counter;
