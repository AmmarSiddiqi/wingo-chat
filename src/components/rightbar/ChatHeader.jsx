import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@mui/material";
import getCurrentTime from "../../helpers/getCurrentTime";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import "./chatHeader.scss";

const ChatHeader = ({ name }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => setTime(getCurrentTime()), 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="chat_header">
      <div className="chat_details">
        <Avatar
          alt="profile"
          sx={{ width: 36, height: 36 }}
          src="https://avatars.dicebear.com/api/adventurer/:2757.svg"
        />
        <div className="chat_info">
          <h4 className="chat_title">{name}</h4>
          <p>{time}</p>
        </div>
      </div>
      <div className="chat_options">
        <IconButton>
          <SearchIcon sx={{ width: "28px", height: "28px" }} />
        </IconButton>
        <IconButton>
          <MoreVertRoundedIcon sx={{ width: "28px", height: "28px" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
