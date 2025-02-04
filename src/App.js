import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button, Container, Grid, Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade}>
      <Container>
        <h1 className="heading">React Task</h1>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link to="/counter">
                <Button variant="contained" fullWidth>
                  Counter Component
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link to="/user-form">
                <Button variant="contained" fullWidth>
                  User Form
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Link to="/editor">
                <Button variant="contained" fullWidth>
                  Rich Text Editor
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </animated.div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/editor" element={<RichTextEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
