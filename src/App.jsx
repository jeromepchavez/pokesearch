import React, { useState, useEffect } from 'react';
import { Input, Box } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1100')
      .then(response => {
        const names = response.data.results.map(pokemon => pokemon.name)
        setPokemonNames(names);
      })
      .catch(error => {
        console.error('Error fetching Pokemon names:', error);
      });
  })
  return (
    <Box>
      <h1>PokeSearch!</h1>
      <Input />
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </Box>
  )
}

export default App
