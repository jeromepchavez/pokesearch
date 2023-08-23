// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonDetail from './components/PokemonDetail';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      console.log(response.data)
      const pokemon = {
        name: response.data.name,
        type: response.data.types[0].type.name,
        height: response.data.height,
        weight: response.data.weight,
        imageUrl: response.data.sprites.other["official-artwork"].front_default,
        shinyUrl: response.data.sprites.other["official-artwork"].front_shiny,
        pokemonID: response.data.id
      };
      setSelectedPokemon(pokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setSelectedPokemon(null);
    }
  };

  return (
    <div className="App">
      <h1>Pokémon Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonDetail pokemon={selectedPokemon} />
    </div>
  );
};

export default App;
