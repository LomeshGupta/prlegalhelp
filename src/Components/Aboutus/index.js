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
                height: '75vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '50px',
                margin: 0,
            }}
        >
            <Typography variant="h2" gutterBottom style={{ color: '#fff' }}>
                About Us
            </Typography>
            <Typography variant="body1" style={{ color: '#fff' }}>
                At PR Legal Help, our unwavering dedication lies in providing unparalleled legal services meticulously tailored to cater to the multifaceted needs of our esteemed clients. As a prominent legal firm, we excel in an extensive spectrum of practice areas, extending comprehensive and innovative solutions to individuals, businesses, and organizations alike. With our wealth of experience and expertise, we are committed to navigating complex legal landscapes with precision, integrity, and a steadfast commitment to achieving favorable outcomes for our clients.
            </Typography>
        </div>
    );
}

export default AboutUs;
