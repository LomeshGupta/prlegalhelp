import React from "react";
import { Grid, Paper, Typography, useTheme } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GavelIcon from "@mui/icons-material/Gavel";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const ServiceSection = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <BusinessIcon fontSize="large" />,
      title: "Corporate Law",
      subtitle: "Legal services for businesses and corporations",
    },
    {
      icon: <GavelIcon fontSize="large" />,
      title: "Litigation",
      subtitle: "Legal representation in court cases and disputes",
    },
    {
      icon: <AssignmentIcon fontSize="large" />,
      title: "Contract Law",
      subtitle: "Drafting and reviewing contracts",
    },
    {
      icon: <LocalHospitalIcon fontSize="large" />,
      title: "Healthcare Law",
      subtitle: "Legal services for healthcare providers and patients",
    },
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Immigration Law",
      subtitle: "Assistance with visas, green cards, and citizenship",
    },
    {
      icon: <HomeWorkIcon fontSize="large" />,
      title: "Real Estate Law",
      subtitle: "Legal assistance with property transactions",
    },
  ];

  return (
    <Grid container spacing={2} sx={{ padding: "25px" }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: "center",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "black",
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            {service.icon}
            <Typography variant="h6" component="h2" mt={2}>
              {service.title}
            </Typography>
            <Typography variant="body2" mt={1}>
              {service.subtitle}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServiceSection;
