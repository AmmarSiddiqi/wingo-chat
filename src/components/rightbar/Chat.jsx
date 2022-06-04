import React from "react";
import "./chat.scss";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader name="Ammar Siddiqi" />
      <ChatBody />
      <ChatMessage />
    </div>
  );
}

export default Chat;
