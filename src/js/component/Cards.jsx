import React from "react";
import PropType from "prop-types";

const Cards = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.alt}</h5>
        <p className="card-text ">{props.description}</p>
        <div className="d-flex justify-content-center">
          <a href={props.Link} className="btn btn-primary">
            {props.desLink}
          </a>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  img: PropType.string,
  alt: PropType.string,
  tittle: PropType.string,
  description: PropType.string,
  Link: PropType.string,
  desLink: PropType.string,
};
export default Cards;
