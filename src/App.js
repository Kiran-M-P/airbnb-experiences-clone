import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./data";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <div className="cards">
        {data.map((datum) => {
          return (
            <Card
              src={datum.coverImg}
              rating={datum.stats.rating}
              reviewCount={datum.stats.reviewCount}
              location={datum.location}
              title={datum.title}
              price={datum.price}
            />
          );
        })}
      </div>
    </div>
  );
}
