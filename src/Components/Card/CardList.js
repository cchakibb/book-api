import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {
      isFavorite: false,
    };
  }
  render() {
    return (
      <div>
        <div>
          <Card />
        </div>
      </div>
    );
  }
}
