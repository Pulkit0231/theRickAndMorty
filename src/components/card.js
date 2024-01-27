import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const RickAndMortyCard = ({ image, title, species, gender }) => {
    return (
        <div className='main-card-container'>
            <Card sx={{
                maxWidth: 345,
                border: '1px solid #e0e0e0',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
            }}>
                <CardMedia sx={{ height: 240 }} image={image} title={title} />
                <CardContent>
                    <Typography sx={{
                        width: '200px',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap', overflow: 'hidden',
                        '&:hover': {
                            whiteSpace: 'unset',
                        },
                    }}
                        gutterBottom variant="h5" component="div">
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
        </div >
    );
};

export default RickAndMortyCard;
