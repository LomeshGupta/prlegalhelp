import React from "react";
import { Container, Typography, Grid, Box, Button } from "@mui/material";

const WhyChooseUsSection = () => {
    return (
        <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: "30px" }}>
                    Why Choose Us
                </Typography>
                <Grid container spacing={10} sx={{ padding: "20px" }}>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Experienced Professionals
                            </Typography>
                            <Typography variant="body1">
                                Our team consists of highly experienced legal professionals
                                dedicated to providing top-notch services to our clients.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Client-Centric Approach
                            </Typography>
                            <Typography variant="body1">
                                We prioritize the needs and goals of our clients, ensuring that
                                they receive personalized attention and tailored solutions.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box textAlign="center">
                            <Typography variant="h6" gutterBottom>
                                Proven Track Record
                            </Typography>
                            <Typography variant="body1">
                                With a history of successful cases and satisfied clients, we
                                have established ourselves as a trusted legal partner.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyChooseUsSection;
