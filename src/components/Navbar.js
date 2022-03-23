import Logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="logo" />
    </nav>
  );
}
