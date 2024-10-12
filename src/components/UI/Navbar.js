import React from "react";
import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import { FaBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: "space-between", px: 4, py: 2, bgcolor: 'white', mb: 1 }}>
        <Typography fontSize={25} fontWeight={600} sx={{ color: "black" }}>
          LOGO
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <FaBell style={{ fontSize: '1.75rem', color: 'black' }} />
          </IconButton>
          <IconButton>
            <CgProfile style={{ fontSize: '1.75rem', color: 'black' }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
