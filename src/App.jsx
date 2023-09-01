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
  const findEnglishFlavorText = (array) => {
    let result = null;
    array.forEach(item => {
      if (item.language.name === 'en') {
        result = item.flavor_text;
      }
    });
    return result;
  }

  const findEnglishClassification = (array) => {
    let result = null;
    array.forEach(item => {
      if (item.language.name === 'en') {
        result = item.genus;
      }
    });
    return result;
  }

  const handleSearch = async (searchQuery) => {
    try {
      const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${searchQuery.toLowerCase()}`);
      console.log(response1.data, response2.data)
      const pokemon = {
        name: response1.data.name,
        type: response1.data.types,
        height: response1.data.height,
        weight: response1.data.weight,
        imageUrl: response1.data.sprites.other["official-artwork"].front_default,
        shinyUrl: response1.data.sprites.other["official-artwork"].front_shiny,
        pokemonID: response1.data.id,
        generation: response2.data.generation.name,
        pokedexEntry: findEnglishFlavorText(response2.data.flavor_text_entries),
        foreignNames: response2.data.names.slice(0, 3),
        classification: findEnglishClassification(response2.data.genera),
      };
      console.log(pokemon)
      setSelectedPokemon(pokemon);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setSelectedPokemon(null);
    }
  };

  return (
    <Box className='body'>
      <Center>
        <Heading textShadow='1px 1px #DEDEDE' size='2xl' margin='20px'>Pokémon Search App</Heading>
      </Center>
      <SearchBar onSearch={handleSearch} />
      <PokemonDetail pokemon={selectedPokemon} />
    </Box>
  );
};

