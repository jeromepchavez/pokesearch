// PokemonDetail.js
import React from 'react';
import { 
          Heading, 
          Center, 
          Box,
          Card,
          CardHeader,
          CardBody,
          HStack,
          Image,
          Badge
        } from '@chakra-ui/react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <Center margin="20px">No Pokémon selected.</Center>;
  }

  //Height is given in decimeters. Function to convert to feet/inches. divide height by 3.048
  const calculateFeetInches = (height) => {
    let feet = Math.floor(height / 3.048)
    let inches = parseFloat((height % 3.048).toFixed(2))
    return feet+ `'` + inches + `"`
  };

  return (
    <Box>
      <Center>
        <Card boxShadow='dark-lg' maxWidth='1000px'>
          <CardHeader>
            <Center>
              <Heading>{pokemon.name.toUpperCase()}</Heading>
            </Center>
          </CardHeader>
          <CardBody>
            <HStack spacing='400px' justifyContent='center'>
              <Badge>ORIGINAL</Badge>
              <Badge colorScheme='purple'>SHINY</Badge>
            </HStack>
            <HStack margin ='10px' spacing='30px' justifyContent='center'>
              <Image boxSize='400px' src={pokemon.imageUrl} alt={pokemon.name} />
              <Image boxSize='400px' src={pokemon.shinyUrl} alt={pokemon.name} />
            </HStack>
            <div>Type: {pokemon.type.map((type, index) => (
              <div key={index}>{type.type.name.toUpperCase()}</div>
              ))}</div>
            <div>Height: {calculateFeetInches(pokemon.height)}</div>
            <div>Weight: {
              //Weight from the GET call is in hectograms. Converting to pounds
              (pokemon.weight/4.536).toFixed(1)
              } lbs.</div>
            <div>ID: {pokemon.pokemonID}</div>
            <div>Pokedex: {pokemon.pokedexEntry}</div>
            <div>Generation: {pokemon.generation}</div>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default PokemonDetail;
