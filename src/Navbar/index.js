import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
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
  const home = document.getElementById("home");
  const box = document.getElementById("box");
  const blogs = document.getElementById("blogs");
  const soft = document.getElementById("soft");
  const testi = document.getElementById("testi");

  const handleScroll = (ref) => {
    home.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const handleScrolltobox = (ref) => {
    box.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const handleScrolltoblog = (ref) => {
    blogs.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const handleScrolltosoft = (ref) => {
    soft.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const menuItems = [
    { text: "Home", onClick: handleClose },
    { text: "About Us", onClick: handleClose },
    { text: "Professionals", onClick: handleClose },
    { text: "Our Services", onClick: handleClose },
    { text: "Our Blogs", onClick: handleClose },
    { text: "Contact Us", onClick: handleClose },
  ];

  return (
    <React.Fragment>
      <AppBar
        elevation={0}
        position="fixed"
        sx={
          navbar
            ? "background-color:black; backdrop-filter: blur(10px); padding:10px"
            : "background-color:transparent;color:'#fff' ;padding:10px;"
        }>
        <Toolbar>
          <Typography variant="h2" style={{ flexGrow: 29 }}>
            <img
              src={favicon}
              alt="Logo"
              style={{ height: "40px", margin: "0px" }}
            />
            <img
              src={textlogo}
              alt="Logo-Name"
              style={{ height: "50px", marginTop: "10px" }}
            />
          </Typography>
          <Hidden mdUp>
            <IconButton sx="color:white" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <div className="nav-links">
              <Button
                style={{ color: "#fff", marginRight: "10px" }}>
                Home
              </Button>
              <Button
                style={{ color: "#fff", marginRight: "10px" }}>
                About Us
              </Button>
              <Button
                style={{ color: "#fff", marginRight: "10px" }}>
                Our Blogs
              </Button>
              <Button
                style={{ color: "#fff", marginRight: "10px" }}>
                Expertise
              </Button>
              <Button
                style={{ color: "#fff", marginRight: "10px" }}
                >
                Testimonals
              </Button>
              {/* <Button style={{ color: "black", marginRight: "10px" }}>
                Contact Us
              </Button> */}
            </div>
            <IconButton
              sx="color:green"
              aria-controls="whatsapp-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <WhatsAppIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div style={{ width: 250 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={item.onClick}>
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
