import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Book from "./Components/Book/Book";

import { BrowserRouter as Rouer } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      query: "history",
    };
  }

  componentDidMount() {
    this.handleFetch("history");
  }

  handleFetch(query) {
    fetch(`https://openlibrary.org/subjects/${query}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <SearchBar onSearch={(query) => this.handleFetch(query)} />
      </div>
    );
  }
}

export default App;
