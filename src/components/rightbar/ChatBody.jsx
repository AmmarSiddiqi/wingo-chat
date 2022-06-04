import React from "react";
import "./chatBody.scss";
import formatTime from "./../../helpers/formatTime";

const ChatBody = () => {
  const time = formatTime(new Date());
  return (
    <div className="chatBody_wrapper">
      <div className="chat_info">
        <p className="chat_message">Hi Ammar</p>
        <span className="chat_timestamp">{time}</span>
      </div>
      <div className="chat_info">
        <p className="chat_message">Hi Ammar</p>
        <span className="chat_timestamp">{time}</span>
      </div>
      <div className="chat_info chat_reciever">
        <p className="chat_message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore
          illo hic ad, natus error autem ea aut sed voluptate ab necessitatibus.
          Eius dignissim
        </p>
        <span className="chat_timestamp">{time}</span>
      </div>
      <div className="chat_info">
        <p className="chat_message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore
          illo hic ad, natus error autem ea aut sed voluptate ab necessitatibus.
          Eius dignissimos similique veritatis modi corrupti aliquid dolorum
          consectetur architecto magnam deserunt quas rem, sunt, dolor autem
          perferendis nihil ratione beatae dicta nulla suscipit voluptate fugit
          odio soluta?
        </p>
        <span className="chat_timestamp">{time}</span>
      </div>
      <div className="chat_info">
        <p className="chat_message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
          asperiores?
        </p>
        <span className="chat_timestamp">{time}</span>
      </div>
      <div className="chat_info">
        <p className="chat_message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore
          illo hic ad, natus error autem ea aut sed voluptate ab necessitatibus.
          Eius dignissimos similique veritatis modi corrupti aliquid dolorum
          consectetur architecto magnam deserunt quas rem, sunt, dolor autem
          perferendis nihil ratione beatae dicta nulla suscipit voluptate fugit
          odio soluta?
        </p>
        <span className="chat_timestamp">{time}</span>
      </div>
    </div>
  );
};

export default ChatBody;
