import React, { Component } from "react";
import Card from "./Card";

function CardList2(props) {
  console.log("test", props.cards);
  return (
    <>
      {props.cards ? (
        props.cards.map((card) => (
          <>
            <Card title={card.title} subtitle={card.authors[0].name} />
          </>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default CardList2;
