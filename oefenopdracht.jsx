const { useState } = React;

function App() {

  const [active, setActive] = useState(false);

  function toggleColor() {
    setActive(!active);
  }

  return (
    <button
      onClick={toggleColor}
      style={{
        backgroundColor: active ? "red" : "blue",
        color: "white",
        padding: "15px 30px",
        border: "none",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      Klik mij
    </button>
  );
}


  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);