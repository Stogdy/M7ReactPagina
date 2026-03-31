import './Top10.css';

export default function Top10() {

  const top10 = [
    { rank: 1, name: "Pizza", description: "Beste eten ooit" },
    { rank: 2, name: "Burger", description: "Altijd goed" },
    { rank: 3, name: "Sushi", description: "Fancy eten" },
    { rank: 4, name: "Pasta", description: "Italiaanse power" },
    { rank: 5, name: "Tacos", description: "Mexicaanse vibe" },
    { rank: 6, name: "Ramen", description: "Japanse soep" },
    { rank: 7, name: "Steak", description: "Voor echte mannen" },
    { rank: 8, name: "Fries", description: "Altijd snacken" },
    { rank: 9, name: "Pancakes", description: "Ontbijt king" },
    { rank: 10, name: "Ice Cream", description: "Altijd dessert" }
  ];

  function TopItem(props) {
    return (
      <div className="item">
        <h2>#{props.rank} - {props.name}</h2>
        <p>{props.description}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Mijn Top 10</h1>

      {top10.map((item) => (
        <TopItem
          key={item.rank}
          rank={item.rank}
          name={item.name}
          description={item.description}
        />
      ))}

    </div>
  );
}