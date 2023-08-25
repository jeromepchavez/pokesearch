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
            <Box>
                <Center>
                    <Input
                        type='text'
                        maxWidth='1000px'
                        margin="20px"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Search Pokemon by name or id..."
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </Center>

            </Box>
        </Box>
    )
}

export default SearchBar;