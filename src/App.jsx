// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Heading } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import PokemonDetail from './components/PokemonDetail';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleSearch = async (searchQuery) => {
    try {
      const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchQuery.toLowerCase()}`);
      console.log(response2.data)
      const pokemon = {
        name: response1.data.name,
        type: response1.data.types[0].type.name,
        height: response1.data.height,
        weight: response1.data.weight,
        imageUrl: response1.data.sprites.other["official-artwork"].front_default,
        shinyUrl: response1.data.sprites.other["official-artwork"].front_shiny,
        pokemonID: response1.data.id,
        pokedexEntry: response2.data.flavor_text_entries[0].flavor_text,
        generation: response2.data.generation.name,
      };
      setSelectedPokemon(pokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setSelectedPokemon(null);
    }
  };

  return (
    <div className="App">
      <Heading>Pokémon Search App</Heading>
      <SearchBar onSearch={handleSearch} />
      <PokemonDetail pokemon={selectedPokemon} />
    </div>
  );
};

export default App;
