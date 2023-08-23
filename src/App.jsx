import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  
  return (
    <div>
      <h1>PokeSearch!</h1>
      <Input />
    </div>
  )
}

export default App
