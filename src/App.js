import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import Book from "./Components/Book/Book";
import CardList from "./Components/Card/CardList";
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
      .then((data) => this.setState({ data: data.works }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar onSearch={(query) => this.handleFetch(query)} />
        <CardList cards={this.state.data} />
      </div>
    );
  }
}

export default App;
