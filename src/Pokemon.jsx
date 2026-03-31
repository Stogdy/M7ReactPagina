import React, { useState, useEffect } from 'react';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, []);

  if (pokemon === null) {
    return (
      <section style={{ textAlign: 'center', padding: '20px' }}>
        {/* <h2>Fetching Pokemon</h2> */}
      </section>
    );
  } else {
    return (
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ color: '#333' }}>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </section>
    );
  }
}

export default Pokemon;