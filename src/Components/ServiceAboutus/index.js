import React from "react";
import { Grid, Paper, Typography, useTheme, Button } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import GavelIcon from "@mui/icons-material/Gavel";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import StoreIcon from "@mui/icons-material/Store";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <WifiIcon fontSize="large" />,
      title: "Tele-communication & Media",
      subtitle: "Legal services for telecommunication and media sectors",
    },
    {
      icon: <GavelIcon fontSize="large" />,
      title: "Dispute Resolution & Litigation",
      subtitle: "Legal representation in court cases and dispute resolution",
    },
    {
      icon: <WorkIcon fontSize="large" />,
      title: "Employment",
      subtitle: "Legal services related to employment and labor law",
    },
    {
      icon: <AccountBalanceIcon fontSize="large" />,
      title: "Will & Trust",
      subtitle: "Assistance with wills, trusts, and estate planning",
    },
    {
      icon: <StoreIcon fontSize="large" />,
      title: "Start-ups & E-commerce",
      subtitle: "Legal services for start-ups and e-commerce businesses",
    },
    {
      icon: <VerifiedUserIcon fontSize="large" />,
      title: "Corporate Compliances",
      subtitle: "Ensuring corporate compliance with legal standards",
    },
    {
      icon: <VolunteerActivismIcon fontSize="large" />,
      title: "Pro Bono",
      subtitle: "Free legal services for those in need",
    },
    {
      icon: <BusinessIcon fontSize="large" />,
      title: "Corporate & Commercial",
      subtitle: "Legal services for corporate and commercial matters",
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
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            background: "none",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "2px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "black",
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <Button
              component={Link}
              to="/our-expertise"
              style={{ fontSize: "2rem", color: "gray" }}
            >
              <ArrowForwardIosIcon
                style={{ fontSize: "2rem", color: "gray" }}
              />
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ServiceSection;
