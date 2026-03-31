import React, { useState, useEffect } from "react";

const upgrades = [
  { name: "+1 Cookiezi", cps: 20, cost: 100 },
  { name: "+1 Peppy", cps: 100, cost: 500 },
  { name: "+1 Mrekk", cps: 50000, cost: 2000 },
];

function CookieClicker() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [ownedUpgrades, setOwnedUpgrades] = useState(Array(upgrades.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((prev) => prev + cps);
    }, 1000);
    return () => clearInterval(interval);
  }, [cps]);

  const handleClick = () => {
    setCookies((prev) => prev + 1);
  };

  const buyUpgrade = (index) => {
    if (cookies >= upgrades[index].cost) {
      setCookies((prev) => prev - upgrades[index].cost);
      setCps((prev) => prev + upgrades[index].cps);
      setOwnedUpgrades((prev) => {
        const newOwned = [...prev];
        newOwned[index]++;
        return newOwned;
      });
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>osu! Cookie Clicker</h1>
      
      
      <div>
        <button
          style={{
            fontSize: 24,
            padding: "20px 40px",
            borderRadius: "50%",
            background: "#ff66aa",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginBottom: 20,
          }}
          onClick={handleClick}
        >
          Click osu! cookie
        </button>
      </div>
      <div style={{ fontSize: 20, marginBottom: 10 }}>
        Cookies: {cookies}
      </div>
      <div style={{ fontSize: 16, marginBottom: 20 }}>
        Cookies per second: {cps}
      </div>
      <h2>Upgrades</h2>
      <div>
        {upgrades.map((upgrade, idx) => (
          <div key={upgrade.name} style={{ marginBottom: 10 }}>
            <button
              disabled={cookies < upgrade.cost}
              onClick={() => buyUpgrade(idx)}
              style={{
                padding: "10px 20px",
                background: cookies >= upgrade.cost ? "#66ccff" : "#ccc",
                color: "#222",
                border: "none",
                borderRadius: 8,
                cursor: cookies >= upgrade.cost ? "pointer" : "not-allowed",
                marginRight: 10,
              }}
            >
              {upgrade.name} ({upgrade.cps} cps) - Cost: {upgrade.cost}
            </button>
            <span>Owned: {ownedUpgrades[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CookieClicker;
