import React from "react";
import "./leftbarHeader.scss";
import Avatar from "@mui/material/Avatar";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

const LeftbarHeader = (props) => {
  return (
    <div className="leftbarHeader_wrapper">
      <div className="left">
        <IconButton>
          <Avatar
            alt="profile"
            sx={{ width: 36, height: 36 }}
            src="https://avatars.dicebear.com/api/adventurer/:2757.svg"
          />
        </IconButton>
      </div>
      <div className="right">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default LeftbarHeader;
