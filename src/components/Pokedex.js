import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  const pokecards = props.pokemon.map(pokemon => (
    <Pokecard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.type}
      image={pokemon.image}
    />
  ));

  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-cards">{pokecards}</div>
    </div>
  );
}

export default Pokedex;
