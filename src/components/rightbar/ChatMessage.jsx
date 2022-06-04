import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./chatMessage.scss";

const useStyles = makeStyles({
  input: {
    width: "90%",
  },
  emoticon: {
    marginRight: "5px",
    cursor: "pointer",
    width: "28px",
    height: "28px",
    color: "#1383a7",
  },
  sendIcon: {
    width: "28px",
    height: "28px",
    color: "#1383a7",
    cursor: "#pointer",
  },
});

const ChatMessage = () => {
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const handleMessageChange = (event) => {
    const msg = event.target.value;
    setMessage(msg);
    console.log(msg);
  };
  const handleSubmit = () => {
    setMessage("");
  };
  return (
    <div className="chatMessage_wrapper">
      <div className="typeMessage">
        <EmojiEmotionsIcon className={classes.emoticon} />
        <Input
          placeholder="Type your message"
          value={message}
          onChange={handleMessageChange}
          className={classes.input}
        />
      </div>
      <div className="sendMessage">
        <button type="submit">
          <SendIcon className={classes.sendIcon} onClick={handleSubmit} />
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
