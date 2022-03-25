export default function Card(props) {
  let badgetext;
  if (props.openSpots === 0) {
    badgetext = "SOLD OUT";
  } else if (props.location === "Online") {
    badgetext = "ONLINE";
  }

  return (
    <div className="card">
      {badgetext && <div className="card-badge">{badgetext}</div>}
      <img className="dp" src={props.coverImg} alt="coverphoto" />
      <div className="rating">
        <img src="images/star.png" alt="star" className="star" />
        <p>
          {props.stats.rating}{" "}
          <span className="grey">
            ({props.stats.reviewCount})<span className="dot">·</span>
            {props.location}
          </span>
        </p>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
