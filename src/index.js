import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const list = [
  {
    id: 1,
    name: "How to tame the husband",
    author: "Hang Nguyen"
  },
  {
    id: 2,
    name: "How to listen to the wife",
    author: "Truong Nguyen"
  },
  {
    id: 3,
    name: "How to eat fast",
    author: ""
  }
];

function filterWithText(searchText) {
  return item => item.name.toLowerCase().includes(searchText.toLowerCase());
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { list, searchText: "" };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.filterItem = this.filterItem.bind(this);
  }

  filterItem(item) {
    return item.name
      .toLowerCase()
      .includes(this.state.searchText.toLowerCase());
  }

  deleteItem(thisItem) {
    const newList = this.state.list.filter(item => thisItem.id !== item.id);
    this.setState({ list: newList });
  }

  onSearchChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { list, searchText } = this.state;
    return (
      <div className="App">
        <h1>Book List</h1>
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {list.filter(filterWithText(searchText)).map(item => (
          <div key={item.id}>
            <span>{item.name} - </span>
            <span>{item.author || "<unknown>"}</span>
            <button onClick={() => this.deleteItem(item)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
