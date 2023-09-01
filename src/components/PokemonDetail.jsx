// PokemonDetail.js
import React from 'react';
import { 
          Heading, 
          Center, 
          Box,
          Card,
          CardBody,
          HStack,
          VStack,
          Image,
          Badge,
          Tag,
          Text,
          Spacer,
        } from '@chakra-ui/react';
import '../css/pokemontype.css'

const PokemonDetail = ({ pokemon }) => {
  if (!pokemon) {
    return <Center margin="20px">No Pokémon selected.</Center>;
  }

  //Height is given in decimeters. Function to convert to feet/inches. divide height by 3.048
  const calculateHeights = (height) => {
    const decimeterToFoot = 1/3.048;
    const feetWithInch = height * decimeterToFoot;
    const feet = feetWithInch - feetWithInch % 1;
    const inches = Math.round(feetWithInch % 1 * 12);
    const meters = height / 10;
    return (
      <Box>
        <Text size='xs'>{feet + `' ` + inches + `"`}</Text>
        <Text size='xs'>{meters + 'm'}</Text>
      </Box>
    )
  };
  //API returns weight in hectograms. Will convert to pounds and kilograms
  const calculateWeights = (weight) => {
    const pounds = (weight / 4.536).toFixed(1);
    const kilograms = (weight / 10).toFixed(1);
    return (
      <Box>
        <Text size='xs'>{pounds + 'lbs.'}</Text>
        <Text size='xs'>{kilograms + 'kg'}</Text>
      </Box>
    );
  }
  //displaying list of the Pokemon name in other languages
  const renderForeignNames = (arrayOfNames) => {
    return (
      <VStack margin='20px'>
        <Heading size='sm'>Japanese: </Heading>
        <Text fontSize='xs'>{arrayOfNames[0].name}</Text>
        <Text fontSize='xs'>{arrayOfNames[1].name}</Text>
        <Heading size='sm'>Korean: </Heading>
        <Text fontSize='xs'>{arrayOfNames[2].name}</Text>
      </VStack>
    );
  }
  //Conditional rendering of Shiny version if it exists or not
  const renderShiny = (shinyUrl) => {
    if (!shinyUrl) {
      return <Heading size='md' boxSize='400px' marginTop='20px' textAlign='center'>No Shiny Form Available</Heading>;
    } else {
      return <Image boxSize='400px' src={pokemon.shinyUrl} alt={pokemon.name} />;
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
        <Card boxShadow='dark-lg' maxWidth='1000px'>
          <CardBody width='850px'>
            <HStack margin ='10px' spacing='30px' justifyContent='center'>
              <VStack margin='10px'>
                <Badge>ORIGINAL</Badge>
                <Image boxSize='400px' src={pokemon.imageUrl} alt={pokemon.name} />
              </VStack>
              <VStack>
                <Badge colorScheme='purple'>SHINY</Badge>
                { renderShiny(pokemon.shinyUrl) }
              </VStack>
            </HStack>
            <HStack margin='10px'>
              <Center>
                <VStack margin='10px'>
                  <Heading>{pokemon.name.toUpperCase()}</Heading>
                  <Text>{pokemon.classification}</Text>
                </VStack>
              </Center>
              <Spacer />
              {renderForeignNames(pokemon.foreignNames)}
              <Spacer />
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
            </HStack>
            <HStack>
              <Box margin='10px'><Heading size='xs'>Height: </Heading> {calculateHeights(pokemon.height)}</Box>
              <Box margin='10px'><Heading size='xs'>Weight: </Heading>{calculateWeights(pokemon.weight)}</Box>
              <Box margin='10px'><Heading size='xs'>Pokedex: </Heading>{pokemon.pokedexEntry}</Box>
            </HStack>
            <HStack>
              <Box margin='10px'><Heading size='xs'>Pokemon ID: </Heading>{'No. ' + pokemon.pokemonID}</Box>
              <Box margin='10px'><Heading size='xs'>Generation: </Heading>{pokemon.generation}</Box>
            </HStack>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default PokemonDetail;
