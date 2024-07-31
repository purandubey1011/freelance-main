"use client";
import { LocationCity, LocationOn } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const OurLocations = () => {
  const locations = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.162370568287!2d-121.84068022413798!3d37.31498137210482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e32ea3e7194ef%3A0xb0f4b2272bc5a919!2s1075%20Tully%20Rd%2C%20San%20Jose%2C%20CA%2095122%2C%20USA!5e0!3m2!1sen!2sin!4v1715691601187!5m2!1sen!2sin",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.6198158697553!2d-122.0062653241362!3d37.35150847209509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5f024ea53d7%3A0x5b2c213ffdb02f13!2s1062%20E%20El%20Camino%20Real%2C%20Sunnyvale%2C%20CA%2094087%2C%20USA!5e0!3m2!1sen!2sin!4v1715691874176!5m2!1sen!2sin",
  };
  const [location, setLocation] = useState(1);
  return (
    <Box
      px={2}
      sx={{
        minHeight: { xs: "20vh", md: "70vh" },
        display: { md: "flex", alignItems: "center" },
      }}
    >
      <Box
        sx={{
          width: { md: "50%" },
        }}
      >
        <Typography variant="h4" fontSize={{ md: "40px" }} mb={2}>
          OUR LOCATIONS
        </Typography>
        <IconButton onClick={() => setLocation(1)} disableRipple={true}>
          <Box
            display={"inline-flex"}
            alignContent={"center"}
            mt={{ md: 3 }}
            borderBottom={
              location === 1 ? "1.5px solid red" : "1.5px solid #888"
            }
          >
            <LocationOn fontSize="large" />
            <Typography variant="h6" textAlign={"left"} mb={1}>
              1075 Tully Rd Space #10, San Jose, CA 95122, USA.
            </Typography>
          </Box>
        </IconButton>
        <IconButton onClick={() => setLocation(2)} disableRipple={true}>
          <Box
            display={"inline-flex"}
            alignContent={"center"}
            my={{ md: 3 }}
            borderBottom={
              location === 2 ? "1.5px solid red" : "1.5px solid #888"
            }
          >
            <LocationOn fontSize="large" />
            <Typography variant="h6" textAlign={"left"} mb={1}>
              1062 E El Camino Real Unit I Sunnyvale, CA 94087, USA.
            </Typography>
          </Box>
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { md: "50%" },
          height: { xs: "30vh", md: "45vh" },
        }}
      >
        <iframe
          src={location ? locations[location] : locations.first}
          width="90%"
          height="100%"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default OurLocations;
