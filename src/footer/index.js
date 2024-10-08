import React from "react";
import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import FacebookIcon from "@mui/icons-material/Facebook";
import Mail from "@mui/icons-material/Mail";
import Youtube from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Typography variant="h4" marginTop="50px" marginBottom="20px">
              PR LEGAL HELP
            </Typography>
            <Typography variant="p">
              PR Legal Help, based in Delhi, offers expert legal solutions with
              integrity. Our experienced team specializes in corporate law,
              litigation, and personal matters, delivering tailored services to
              meet your needs. Contact us to see how we can assist you.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={6} sm={4} md={4}>
                <Typography variant="h6" style={sectionStyle}>
                  Site Links
                </Typography>
                <Grid container direction="column">
                  {/* Use RouterLink instead of Link */}
                  <RouterLink style={links} to="/about-us">
                    About Us
                  </RouterLink>
                  <RouterLink style={links} to="/attorneys">
                    Attorneys
                  </RouterLink>
                  <RouterLink style={links} to="/our-expertise">
                    Expertise
                  </RouterLink>
                  <RouterLink style={links} to="/contact-us">
                    Contact Us
                  </RouterLink>
                  {/* <RouterLink style={links} to="#">
                    Link 5
                  </RouterLink> */}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Typography variant="h6" style={sectionStyle}>
                  Social
                </Typography>
                <div style={socialContainerStyle}>
                  <IconButton
                    href="https://www.facebook.com/profile.php?id=61554854935301&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="mailto:contact@prlegalhelps.com"
                    target="_blank"
                    color="#fff"
                    rel="noopener noreferrer"
                  >
                    <Mail style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="https://www.youtube.com/@advocatepoonamrimal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/company/101625161/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon style={{ color: "#fff" }} />
                  </IconButton>
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
