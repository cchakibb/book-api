import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchedValue: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchedValue);
    this.setState({ searchedValue: "" });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchedValue: event.target.value });
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleChange(event)} id="test" value={this.state.searchedValue} />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
