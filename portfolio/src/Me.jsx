import React from "react";
import Photocard from "https://ik.imagekit.io/u8xrrcdi8/pranush/WhatsApp%20Video%202025-10-29%20at%2010.19.14%20AM.mp4?updatedAt=1761717485578";
import "./Me.css";

function Me() {
  return (
    <div className="About" style={{ backgroundImage: `url(${Photocard})` }}>
      <div className="overlay"></div>
      <div className="descrip">
        <h3>About Me</h3>
        <p>
          I’m Yashwant — an editor, photographer, and cinematographer driven by a passion for visual storytelling.
          I love turning moments into emotions and ideas into cinematic experiences. Whether behind the lens or in the
          edit suite, I aim to create visuals that inspire, move, and stay with people long after they’re seen.
        </p>
      </div>
    </div>
  );
}

export default Me;


