import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./data";

export default function App() {
  const cardElements = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <div>
      <Nav />
      <div className="content">{cardElements}</div>
    </div>
  );
}
