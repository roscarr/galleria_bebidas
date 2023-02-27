import { Link } from "react-router-dom";
import "./Card.css";
function Card({ name, image, id }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card_info">
        <h2>{name}</h2>
        <Link to={`/info/${id}`} className="button">
          detail
        </Link>
      </div>
    </div>
  );
}

export default Card;
