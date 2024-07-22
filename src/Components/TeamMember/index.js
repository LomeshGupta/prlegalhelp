import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const TeamMember = ({ image, name, title, description }) => {
  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 15,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={`${name}'s photo`}
        sx={{
          height: 300,
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
