import React, { useState } from 'react';
import { Box, Input, Button, Center } from '@chakra-ui/react';


const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    }

    return (
        <Box>
            <Box width='600px' position='relative'>
                <Center height='100px'>
                    <Input
                        type='text'
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search Pokemon by name or id..."
                    />
                </Center>
                <Button onClick={handleSearch}>Search</Button>
            </Box>
        </Box>
    )
}

export default SearchBar;