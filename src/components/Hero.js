import coverPhoto from "../images/wall-photos.png";

export default function Hero() {
  return (
    <main className="hero">
      <img className="cover-photo" src={coverPhoto} alt="cover" />
      <h1 className="title">Online Experience</h1>
      <p className="para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
