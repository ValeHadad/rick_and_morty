import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

export default function Cards(props) {
  return (
    <Row className="justify-content-center">
      {props.characters.map((character) => (
        <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            id={character.id}
            name={character.name}
            species={character.species}
            onClose={props.onClose}
            gender={character.gender}
            status={character.status}
            image={character.image}
            origin={character.origin.name}
          />
        </Col>
      ))}
    </Row>
  );
}
