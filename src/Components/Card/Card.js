import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
    };
  }

  handleChange = () => {
    this.setState({ isFavourite: !this.state.isFavourite });
  };

  render() {
    console.log(this.props.authors);
    return (
      <>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        {this.state.isFavourite ? <button onClick={this.handleChange}>Delete from favorites</button> : <button onClick={this.handleChange}>Add to Fav</button>}
      </>
    );
  }
}
