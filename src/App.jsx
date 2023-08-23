import React, { useState, useEffect } from 'react';
import { Input, Box } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit-1100')
      .then(data => console.log(data.data))
      .catch(error => console.log(error))
  })

  return (
    <Box>
      <h1>PokeSearch!</h1>
      <Input />
    </Box>
  )
}

export default App
