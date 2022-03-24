import img from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img className="dp" src={img} alt={props.img} />
        <div className="rating">
          <img src={star} alt="star" className="star" />
          <p>
            {props.rating}{" "}
            <span className="grey">
              ({props.reviewCount})<span className="dot">·</span>
              {props.country}
            </span>
          </p>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}
