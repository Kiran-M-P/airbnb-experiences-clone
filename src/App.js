import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./data";

const cards = data.map((item) => {
  return <Card key={item.id} {...item} />;
});

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <section className="cards">{cards}</section>
    </div>
  );
}
