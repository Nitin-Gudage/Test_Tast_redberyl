import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import Sidebar from "../components/UI/Sidebar";
import { Box, Grid } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ bgcolor: 'lightgray' }}>
      <Navbar />
      <Grid container spacing={1} >
        <Grid item lg={1}>
          <Sidebar />
        </Grid>
        <Grid item lg={11}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
