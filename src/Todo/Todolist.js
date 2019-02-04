import React, { Component } from "react";
import "./Todolist.css";

class Todolist extends Component {
  state = {
    userInput: "",
    items: []
  };

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: "",
      items: [...this.state.items, this.state.userInput]
    });
  }

  deleteTodo(item) {
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }

  renderTodos() {
    return this.state.items.map(item => {
      return (
        <div className="list-group-item" key={item}>
          <div align="center" className="addItem">
            - {item}
          </div>
          <button
            className="deleteButton"
            onClick={this.deleteTodo.bind(this, item)}
          >
            Supprimer
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 align="center">My TodoList</h1>
        <form className="form-row align-items-center">
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Renseigner item"
            onChange={this.onChange.bind(this)}
            className="form-control mb-2"
          />
          <button onClick={this.addTodo.bind(this)} className="btn btn-info">
            Ajouter
          </button>
        </form>
        <div className="list-group">{this.renderTodos()}</div>
      </div>
    );
  }
}

export default Todolist;
