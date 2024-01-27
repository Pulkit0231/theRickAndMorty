import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import rm from './img/rm512.png';
import './searchbar.css'

// To be optimized

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    borderColor: '#dbdbdb',
    borderWidth: '1px',
    borderStyle: 'solid',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'Black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'Grey',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

export default function SearchAppBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };



    return (
        <div className='searchbar-main-container'>
            <div className='banner-main-container'>
                <h1 className='banner-text'>The Rick  and Morty Character Finder</h1>
                <img
                    src={rm}
                    alt="logo"
                    className='main-logo'
                />
            </div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Characters…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </Search>
        </div>
    );
}