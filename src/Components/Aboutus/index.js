import React from 'react';
import { Container, Typography, Breadcrumbs, Link } from '@mui/material';
import backgroundImage from '../../assets/images/about-us/read.jpg';

const AboutUs = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '40vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '50px',
                paddingTop:'10%',
                margin: 0,
            }}
        >
            <Typography variant="h2" gutterBottom style={{ color: '#fff' }}>
                About Us
            </Typography>
            <Breadcrumbs color="#fff" aria-label="breadcrumb">
                <Link color="#fff" href="/">
                    Home
                </Link>
                <Typography color="#fff">About</Typography>
            </Breadcrumbs>
        </div>
    );
}

export default AboutUs;
