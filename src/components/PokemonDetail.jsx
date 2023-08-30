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
import '../css/pokemontype.css'

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

  //Function that also returns the corresponding image of the Pokemon type
  const renderPokemonType = (type) => {
    switch(type) {
      case type = 'fire':
        return "src/assets/pokemon-types/fire.svg"
      case type = 'flying':
        return "src/assets/pokemon-types/flying.svg"
      case type = 'electric':
        return "src/assets/pokemon-types/electric.svg"
      case type = 'ghost':
          return "src/assets/pokemon-types/ghost.svg"
      case type = 'fighting':
        return "src/assets/pokemon-types/fighting.svg"
      case type = 'water':
        return "src/assets/pokemon-types/water.svg"
      case type = 'grass':
        return "src/assets/pokemon-types/grass.svg"
      case type = 'fairy':
        return "src/assets/pokemon-types/fairy.svg"
      case type = 'dark':
        return "src/assets/pokemon-types/dark.svg"
      case type = 'dragon':
        return "src/assets/pokemon-types/dragon.svg"
      case type = 'poison':
        return "src/assets/pokemon-types/poison.svg"
      case type = 'psychic':
        return "src/assets/pokemon-types/psychic.svg"
      case type = 'rock':
        return "src/assets/pokemon-types/rock.svg"
      case type = 'steel':
        return "src/assets/pokemon-types/steel.svg"
      case type = 'ice':
        return "src/assets/pokemon-types/ice.svg"
      case type = 'ground':
        return "src/assets/pokemon-types/ground.svg"
      case type = 'normal':
        return "src/assets/pokemon-types/normal.svg"
      case type = 'bug':
        return "src/assets/pokemon-types/bug.svg"
    }
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
            <div>Type: {pokemon.type.map((type) => (
              <div>
                <div key={type.slot}>
                  {type.type.name.toUpperCase()}
                  <img 
                    className={type.type.name + " icon"} 
                    src={renderPokemonType(type.type.name)} 
                    alt={type.type.name} 
                  />
                </div>
              </div> 
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
