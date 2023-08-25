// PokemonDetail.js
import React from 'react';
import { 
          Heading, 
          Center, 
          Box,
          Card,
          CardHeader,
          CardBody,
          CardFooter,
          HStack,
          Image,
          Badge
        } from '@chakra-ui/react';

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <Center margin="20px">No Pokémon selected.</Center>;
  }

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
            <div>Type: {pokemon.type}</div>
            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
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
