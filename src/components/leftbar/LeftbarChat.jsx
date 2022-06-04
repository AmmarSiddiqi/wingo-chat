import React, { useState, useEffect } from "react";
import "./leftbarChat.scss";
import Avatar from "@mui/material/Avatar";

const LeftbarChat = ({ name, description }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="leftbarChat_wrapper">
      <div className="left">
        <Avatar
          alt="Profile"
          src={`https://avatars.dicebear.com/api/adventurer/:${seed}.svg`}
        />
      </div>
      <div className="right">
        <strong className="name">{name}</strong>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default LeftbarChat;
