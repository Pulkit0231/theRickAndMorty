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
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    //snackbar    

    //snackbar
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };



    return (
        <div >
            <Box >
                <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <Toolbar className='Toolbar'>
                        <img
                            src={rm}
                            style={{
                                width: '3rem',
                                color: 'inherit',
                                ariaLabel: 'open drawer',
                            }}
                            alt="logo"
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        ></Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={searchTerm}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box >
            <div className='bg-img'>
                <h1 className='text'>The Rick  and Morty API</h1>
            </div>
        </div >
    );
}