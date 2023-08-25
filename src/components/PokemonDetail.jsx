// PokemonDetail.js
import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <div>No Pokémon selected.</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <img src={pokemon.shinyUrl} alt={pokemon.name} />
      <div>Type: {pokemon.type}</div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>ID: {pokemon.pokemonID}</div>
      <div>Pokedex: {pokemon.pokedexEntry}</div>
      <div>Pokedex2: {pokemon.pokedexEntry2}</div>
      <div>Generation: {pokemon.generation}</div>
    </div>
  );
};

export default PokemonDetail;
