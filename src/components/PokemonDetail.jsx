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

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <Center margin="20px">No Pokémon selected.</Center>;
  }

  //Height is given in decimeters. Function to convert to feet/inches. divide height by 3.048
  const calculateFeet = (height) => {
    return Math.floor(height / 3.048)
  };

  const calculateInches = (height) => {
    return (height % 3.048)
  }

  return (
    <Box>
      <Center>
        <Card boxShadow='dark-lg' maxWidth='1000px'>
          <Tabs variant='enclosed'>
            <TabList>
              <Tab>INFO</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
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
                  <div>Height: {calculateFeet(pokemon.height)}' {calculateInches(pokemon.height)}"</div>
                  <div>Weight: {pokemon.weight}</div>
                  <div>ID: {pokemon.pokemonID}</div>
                  <div>Pokedex: {pokemon.pokedexEntry}</div>
                  <div>Generation: {pokemon.generation}</div>
                </CardBody>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Center>
    </Box>
  );
};

export default PokemonDetail;
