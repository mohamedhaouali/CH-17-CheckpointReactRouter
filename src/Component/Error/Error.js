import React from "react";
import Button from "react-bootstrap/Button";
import "./Error.css";
const Error = (props) => {
  console.log(props);

  return (
    <div className="Error">
      <img
        src="https://images2.alphacoders.com/705/thumb-1920-705824.jpg"
        alt="Error"
      />
      <Button variant="danger" onClick={() => props.history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Error;
