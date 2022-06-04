import React, { useState, useEffect } from "react";
import "./leftbar.scss";
import LeftbarHeader from "./LeftbarHeader";
import LeftbarSearch from "./LeftbarSearch";
import LeftbarChat from "./LeftbarChat";

const Leftbar = () => {
  return (
    <div className="leftbar__container">
      <div className="leftbar_fixed">
        <LeftbarHeader />
        <LeftbarSearch />
      </div>
      <div className="leftbar_scroll">
        <LeftbarChat name="Ammar" description="Last Message" />
        <LeftbarChat
          name="Noman"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkossl fpelwbfiv pnldscbjsw'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
        <LeftbarChat
          name="Aisha"
          description="lorem ipsum doler sit amet fiakdlsfkow'fel;jdvh"
        />
      </div>
    </div>
  );
};

export default Leftbar;
