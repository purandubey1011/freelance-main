"use client"
import { Box, Typography } from "@mui/material";
import React from "react";
import Swipermaterial from "./Swipmaterial";

const Crousel = ({images}) => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" align="center" fontWeight={500} mb={4}>
        Our Works
      </Typography>
      <Swipermaterial images={images}/>
    </Box>
  );
};

export default Crousel;

