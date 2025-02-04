import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const mobileMenu = (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/counter"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="Counter" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/user-form"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="User Form" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/editor"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="Rich Text Editor" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/login"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/signup"
          onClick={() => toggleDrawer(false)}
        >
          <ListItemText primary="Signup" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6">React Task</Typography>
          {isMobile ? (
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/counter">
                Counter
              </Button>
              <Button color="inherit" component={Link} to="/user-form">
                User Form
              </Button>
              <Button color="inherit" component={Link} to="/editor">
                Rich Text Editor
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
      {mobileMenu}
    </AppBar>
  );
};

export default Navbar;
