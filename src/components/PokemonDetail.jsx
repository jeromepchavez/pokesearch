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
          VStack,
          Image,
          Badge,
          Tag
        } from '@chakra-ui/react';
import '../css/pokemontype.css'

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <Center margin="20px">No Pokémon selected.</Center>;
  }

  //Height is given in decimeters. Function to convert to feet/inches. divide height by 3.048
  const calculateFeetInches = (height) => {
    const decimeterToFoot = 1/3.048;
    const feetWithInch = height * decimeterToFoot;
    const feet = feetWithInch - feetWithInch % 1;
    const inches = Math.round(feetWithInch % 1 * 12);
    return feet + `' ` + inches + `"` 
  };

  const renderShiny = (shinyUrl) => {
    if (!shinyUrl) {
      return <Heading size='md' boxSize='400px'>No Shiny Form Available</Heading>;
    } else {
      return <Image borderRadius='5%' backgroundColor='#DEDEDE' boxSize='400px' src={pokemon.shinyUrl} alt={pokemon.name} />;
    }
  }

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
        <Card boxShadow='dark-lg' border="10px solid #DEDEDE" maxWidth='1000px'>
          <CardHeader>
            <Center>
              <Heading>{pokemon.name.toUpperCase()}</Heading>
            </Center>
          </CardHeader>
          <CardBody>
            <HStack margin ='10px' spacing='30px' justifyContent='center'>
              <VStack>
                <Badge>ORIGINAL</Badge>
                <Image  borderRadius='5%' backgroundColor='#DEDEDE' boxSize='400px' src={pokemon.imageUrl} alt={pokemon.name} />
              </VStack>
              <VStack>
                <Badge colorScheme='purple'>SHINY</Badge>
                { renderShiny(pokemon.shinyUrl) }
              </VStack>
            </HStack>
            <HStack width="200px" marginBottom="50px" marginTop='25px' spacing={2}>{pokemon.type.map((type) => (
              <VStack key={type.slot} className={"icon " + type.type.name}>
                <Image 
                  src={renderPokemonType(type.type.name)} 
                  alt={type.type.name} 
                />
                <Tag key={type.slot}>{type.type.name.toUpperCase()}</Tag>
              </VStack>
              ))}
            </HStack>
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
