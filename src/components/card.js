import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const RickAndMortyCard = ({ image, title, species, gender }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 240 }} image={image} title={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Species: {species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Gender: {gender}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RickAndMortyCard;
