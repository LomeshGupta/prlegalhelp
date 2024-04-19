import React from "react";
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Mail from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import textlogo from "../text-logo.png";
import favicon from "../favicon.png";
import { Margin } from "@mui/icons-material";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    color: "#fff",
    padding: "20px 0",
  };

  const links = {
    textDecoration: "None",
    maxWidth: "250px",
    marginBottom: "10px",
    color: "#fff",
  };

  const sectionStyle = {
    marginBottom: "10px",
    fontWeight: "900",
    marginTop: "30px",
  };

  const socialContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const copyrightStyle = {
    textAlign: "center",
    marginTop: "60px",
  };

  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <img src={favicon} alt="Logo" width="60px" />
            <img src={textlogo} alt="Logo" style={logoStyle} /> */}
            <Typography variant="h4" marginTop="50px" marginBottom="20px">
              PR LEGAL HELP
            </Typography>
            <Typography variant="p">
              Best LEGAL Advisor Around PR LEGAL HELP is a dedicated
              supplier of legal service to legal professionals & Firms
              in ireland, UK, Dubai, USA headquartered in Delhi, India, with a
              focus on delivering exceptional outsourcing services to our
              clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="flex-end">
              {/* <Grid item xs={6} sm={4} md={4}>
                <Typography variant="h6" style={sectionStyle}>
                  Products
                </Typography>
                <Grid container direction="column">
                  <Link style={links} href="#">
                    Product 1
                  </Link>
                  <Link style={links} href="#">
                    Product 2
                  </Link>
                  <Link style={links} href="#">
                    Product 3
                  </Link>
                  <Link style={links} href="#">
                    Product 4
                  </Link>
                  <Link style={links} href="#">
                    Product 5
                  </Link>
                </Grid>
              </Grid> */}
              <Grid item xs={6} sm={4} md={4}>
                <Typography variant="h6" style={sectionStyle}>
                  Company
                </Typography>
                <Grid container direction="column">
                  <Link style={links} href="#">
                    Link 1
                  </Link>
                  <Link style={links} href="#">
                    Link 2
                  </Link>
                  <Link style={links} href="#">
                    Link 3
                  </Link>
                  <Link style={links} href="#">
                    Link 4
                  </Link>
                  <Link style={links} href="#">
                    Link 5
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography variant="h6" style={sectionStyle}>
                  Social
                </Typography>
                <div style={socialContainerStyle}>
                  <IconButton
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                    color="#fff"
                    rel="noopener noreferrer">
                    <Mail style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    <InstagramIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    <LinkedInIcon style={{ color: "#fff" }} />
                  </IconButton>
                  {/* <IconButton
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer">
                    <YouTubeIcon style={{ color: "#fff" }} />
                  </IconButton> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="body2" style={copyrightStyle}>
          &copy; {new Date().getFullYear()} PR LEGAL HELP
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
