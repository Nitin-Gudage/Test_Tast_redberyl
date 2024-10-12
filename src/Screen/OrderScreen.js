import React, { useState } from "react";
import TabHeader from "./order/TabHeader";
import UserProfileCard from "./order/UserProfileCard";
import OrderDetailCard from "./order/OrderDetailCard";
import OrderMainHeader from "./order/OrderMainHeader";
import FilterAndSearching from "../components/FilterAndSearching";
import OrderCard from "./order/OrderCard";
import { Box, Grid, Paper } from "@mui/material";
import OrderSave from "./order/OrderSave";
import { useSelector } from "react-redux";
import OrderDetailsTab from "./order/OrderDetailsTab";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const user = {
  photo:
    "https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-woman-profile-silhouette-black-png-image_6660698.png",
  name: "John Doe",
  status: "online",
  email: "abc@xyz.com",
  phone: "(123) 456-7890",
  address: "123 Main Street, Anytown, USA",
};


const OrderScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [orderDetails, setOrderDetails] = useState();

  const handleOrderSelect = (orderData) => {
    setOrderDetails(orderData);
  }
  return (
    <Box bgcolor="white" px={2} py={1} >
      <OrderMainHeader />
      <FilterAndSearching
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={4}>
          <Paper variant='outlined' sx={{ padding: 2, height: '100%' }}>
            <OrderCard onOrderSelect={handleOrderSelect} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Paper variant='outlined' >
              {orderDetails && <OrderSave orderDetails={orderDetails} />}
            </Paper>
            <Paper variant="outlined" sx={{ display: "flex", gap: 2, padding: 2 }}>
              {orderDetails && <OrderDetailCard orderDetails={orderDetails} />}
              <UserProfileCard user={user} />
            </Paper>
            <Paper variant="outlined" sx={{ padding: 2 }}>
              <TabHeader />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderScreen;
