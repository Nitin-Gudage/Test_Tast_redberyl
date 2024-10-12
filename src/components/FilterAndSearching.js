import React from "react";
import Select from "./Select";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

const FilterAndSearching = ({
  searchValue,
  setSearchValue,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap', my: 3, alignItems: "center" }}>
      <Search
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-64"
      />
      <Select
        options={options}
        value={selectedOption}
        className="w-48"
        placeholder="Filter by Domicile"
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <Select
        options={options}
        value={selectedOption}
        className="w-48"
        placeholder="Filter by Company"
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <Select
        options={options}
        value={selectedOption}
        className="w-48"
        placeholder="Filter by Status"
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <CustomButton
        label="Filter"
        onClick={() => alert("Button clicked")}
        variant="contained"
      />
      <CustomButton
        label="Clear Filter"
        onClick={() => alert("Button clicked")}
      />
    </Box>
  );
};

export default FilterAndSearching;
