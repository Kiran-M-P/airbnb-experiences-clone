import img1 from "../images/img1.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img className="dp" Katie Zaferes src={img1} alt="Katie Zaferes" />
        <div className="rating">
          <img src={star} alt="star" className="star" />
          <p>
            5.0{" "}
            <span className="grey">
              (6)<span className="dot">·</span>USA
            </span>
          </p>
        </div>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="card-price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
}
