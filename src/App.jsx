// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, Center } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import PokemonDetail from './components/PokemonDetail';

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  /*
  Flavor text entries from the api can come in different languages. 
  This function returns the first one translated in english.
  */
  const findEnglishFlavorText = (arr) => {
    let result = null;
    arr.forEach(item => {
      if (item.language.name === 'en') {
        result = item.flavor_text;
      }
    });
    return result;
  }

  const handleSearch = async (searchQuery) => {
    try {
      const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchQuery.toLowerCase()}`);
      const pokemon = {
        name: response1.data.name,
        type: response1.data.types[0].type.name,
        height: response1.data.height,
        weight: response1.data.weight,
        imageUrl: response1.data.sprites.other["official-artwork"].front_default,
        shinyUrl: response1.data.sprites.other["official-artwork"].front_shiny,
        pokemonID: response1.data.id,
        generation: response2.data.generation.name,
        pokedexEntry: findEnglishFlavorText(response2.data.flavor_text_entries),
      };
      setSelectedPokemon(pokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setSelectedPokemon(null);
    }
  };

  return (
    <Box>
      <Center>
        <Heading size='2xl' margin='20px'>Pokémon Search App</Heading>
      </Center>
      <SearchBar onSearch={handleSearch} />
      <PokemonDetail pokemon={selectedPokemon} />
    </Box>
  );
};

