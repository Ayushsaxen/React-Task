import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#1976D2",
      }}
    >
      <Typography variant="body2" color="white">
        Developed by Ayush
      </Typography>
    </Box>
  );
};

export default Footer;
