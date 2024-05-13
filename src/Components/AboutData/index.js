import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import aboutsec from "../../assets/images/about-us/aboutsec.jpeg";
import CounterBox from "../Counterbox";

const SectionWithThreeColumns = () => {
    return (
        <Container sx={{
            width: "100%",
            padding: "50px",
        }}>
            <Grid container spacing={4}>
                {/* First column */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ backgroundColor: '#fff', color: 'black', borderRadius: '2%', padding: '9%' }} p={3} bgcolor="primary.main" color="white">
                        <Typography variant="h3" gutterBottom>
                            Who We Are?
                        </Typography>
                        <Typography variant="body1">
                            At PR Legal Help, we understand that navigating the legal landscape can be complex and daunting. That's why we're here to provide comprehensive legal advisory services tailored to meet your specific needs.

                            With a team of experienced legal professionals, we strive to offer pragmatic solutions to your legal challenges. Our expertise spans a wide range of practice areas, including corporate law, employment law, intellectual property rights, contract law, and more. Whether you're a small startup or a large corporation, we are committed to helping you achieve your goals while safeguarding your interests.
                        </Typography>
                    </Box>
                </Grid>

                {/* Second column */}
                <Grid item xs={12} md={4}>
                    <Box
                        bgcolor="transparent"
                        color="white"
                        marginTop="20px"
                        position="relative"
                        overflow="hidden"
                        borderRadius="10px"
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${aboutsec})`,
                                backgroundSize: "cover",
                                filter: "blur(20px)",
                                zIndex: -1,
                            }}
                        />
                        <img
                            src={aboutsec}
                            alt="Placeholder"
                            style={{
                                height: "73vh",
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </Box>

                </Grid>

                {/* Third column */}
                <Grid item xs={12} md={4} sx={{ width: '100%', justifyContent: "center" }}>
                    <CounterBox intervalDuration={10} title="Years of Experience" />
                    <CounterBox intervalDuration={100} title="Happy Clients" />
                    <CounterBox intervalDuration={60} title="Cases Closed" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SectionWithThreeColumns;
