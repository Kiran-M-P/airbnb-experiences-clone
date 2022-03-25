export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img className="dp" src={props.src} alt="coverphoto" />
        <div className="rating">
          <img src="images/star.png" alt="star" className="star" />
          <p>
            {props.rating}{" "}
            <span className="grey">
              ({props.reviewCount})<span className="dot">·</span>
              {props.location}
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
