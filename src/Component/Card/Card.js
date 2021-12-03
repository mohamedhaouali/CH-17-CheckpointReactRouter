import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './card.css'

// declaration des variables

const card = ({ image, rating, name, type, description, Link }) => {


  return (
    <div>

      <Card style={{ width: '27rem', marginBottom: "5%" }}>

        <Card.Img className="c-img" variant="top" src={image} alt="Movie image" />

        <Card.Body className="c-body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {type}
          </Card.Text>
        </Card.Body>


        <ListGroup className="list-group-flush">

          <ListGroupItem style={{ overflowY: "scroll", maxHeight: "75px" }}>{description}</ListGroupItem>
          <ListGroupItem><ReactStars
            count={rating}
            size={24}
            color="#ffd700"
          /></ListGroupItem>

          <ListGroupItem>{Link}</ListGroupItem>
        </ListGroup>

        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <Button>Trailer</Button>
          <Button>Watch Now</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default card












