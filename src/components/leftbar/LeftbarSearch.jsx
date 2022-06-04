import { TextField } from "@mui/material";
import "./leftbarSearch.scss";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const LeftbarSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(() => setSearch(event.target.value));
  };

  return (
    <div className="search_wrapper">
      <div className="search_bar">
        <SearchOutlinedIcon />
        <input
          placeholder="Search or find a chat"
          type="text"
          value={search}
          onChange={handleSearch}
          className="search_input_feild"
        ></input>
      </div>
    </div>
  );
};

export default LeftbarSearch;
