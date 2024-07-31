"use client";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red, common } from "@mui/material/colors";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: red[900],
    },
    secondary: {
      main: common.white,
    },
    modOptions: {
      main: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: ["Hahmlet", "ariel", "sans-serif"].join(","),
  },
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ToastContainer />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
