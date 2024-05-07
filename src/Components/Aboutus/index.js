import React from 'react';
import { Container, Typography } from '@mui/material';
import backgroundImage from '../../assets/images/about-us/read.jpg';

const AboutUs = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                margin: 0,
            }}
        >
            <Typography variant="h2" gutterBottom style={{ color: '#fff' }}>
                About Us
            </Typography>
            <Typography variant="body1" style={{ color: '#fff' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Typography>
        </div>
    );
}

export default AboutUs;
