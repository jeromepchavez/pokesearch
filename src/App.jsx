import React, { useState, useEffect } from 'react';
import { Input, Box } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let allNames = [];
      let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20'; 

      try {
        while (nextUrl) {
          const response = await axios.get(nextUrl);
          const names = response.data.results.map(pokemon => pokemon.name);
          allNames = allNames.concat(names);
          nextUrl = response.data.next;
        }
        setPokemonNames(allNames);
      } catch (error) {
        console.error('Error fetching Pokemon names:', error);
      }
    };

    fetchData();
  }, []);
  
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
