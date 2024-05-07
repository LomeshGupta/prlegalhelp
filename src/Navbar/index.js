import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import favicon from "../favicon.png";
import textlogo from "../text-logo.png";
import "./navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const changeBackground = () => {
    setNavbar(window.scrollY >= 66);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about-us" },
    { text: "Our Blogs" },
    { text: "Expertise" },
    { text: "Testimonals" },
  ];

  return (
    <React.Fragment>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: navbar ? "black" : "transparent",
          backdropFilter: navbar ? "blur(10px)" : "none",
          padding: "10px",
        }}
      >
        <Toolbar>
          <Typography variant="h2" style={{ flexGrow: 1 }}>
            <img src={favicon} alt="Logo" style={{ height: "40px", margin: "0px" }} />
            <img src={textlogo} alt="Logo-Name" style={{ height: "50px", marginTop: "10px" }} />
          </Typography>
          <Hidden mdUp>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div className="nav-links">
              {menuItems.map((item, index) => (
                <Button key={index} component={Link} to={item.path} style={{ color: "#fff", marginRight: "10px" }}>
                  {item.text}
                </Button>
              ))}
            </div>
            <IconButton color="inherit">
              <WhatsAppIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div style={{ width: 250 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} button component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
