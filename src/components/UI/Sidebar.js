import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../utils/Constant";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <Box sx={{ bgcolor: 'white', height: '100%' }}>
      <List>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? 'blue' : 'black',
            })}
          >
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                '&:hover': {
                  bgcolor: 'lightgray',
                },
              }}
            >
              <span style={{ fontSize: 20 }}>
                {item.icon}
              </span>
              <ListItemText>
                {item.name}
              </ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
