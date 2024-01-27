import React, { useState, useEffect } from 'react';
import RickAndMortyCard from './card';
import SearchAppBar from './searchbar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'; // Import Axios
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './album.css';

const RickAndMortyAlbum = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = searchTerm
                    ? `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${currentPage}`
                    : `https://rickandmortyapi.com/api/character/?page=${currentPage}`;

                const response = await axios.get(url);
                // await delay(5000);
                if (response?.data?.results && Array.isArray(response?.data?.results)) {
                    setCharacters(response.data.results);
                    setTotalPages(response.data.info.pages);
                } else {
                    throw 'Something went wrong';
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage(error.message);
                setErrorSnackbarOpen(true);
            }
        };



        fetchData();
    }, [searchTerm, currentPage]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    const handleCloseSnackbar = () => {
        setErrorSnackbarOpen(false);
    };

    return (
        <div className='main-container'>
            <SearchAppBar onSearch={handleSearch} />
            <div className="card-container">
                {characters.map((character) => (
                    <div className='card-item-container' key={character.id}>
                        <RickAndMortyCard
                            key={character.id}
                            image={character.image}
                            title={character.name}
                            species={character.species}
                            gender={character.gender}
                        />
                    </div>
                ))}
            </div>
            <div className='pagination-container'>
                <Stack spacing={6}>
                    <Pagination
                        count={totalPages}
                        color="primary"
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
            </div>
            <Snackbar
                open={errorSnackbarOpen}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message={errorMessage}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    );
};

export default RickAndMortyAlbum;
