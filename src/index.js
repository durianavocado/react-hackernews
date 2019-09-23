import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const list = [
  {
    id: 1,
    name: 'How to tame the husband',
    author: 'Hang Nguyen'
  },
  {
    id: 2,
    name: 'How to listen to the wife',
    author: 'Truong Nguyen'
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = { list };
  }

  onDelete(thisItem) {
    const newList = this.state.list.filter(
      item => thisItem.id !== item.id
    );
    this.setState({ list: newList });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>Book List</h1>
        {
          list.map(item =>
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.author}</span>
              <button onClick={() => this.onDelete(item)}>Delete</button>
            </div>)
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
