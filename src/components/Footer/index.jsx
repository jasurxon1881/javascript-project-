import React from "react";
import { Wrap, Icon } from "./style";

export default function Footer() {
  return (
    <Wrap>
      <div className="links_wrap">Mazzavot</div>
      <div className="links_wrap">
        <h3>Workshops</h3>
        <span>Creating Great Design</span>
        <span>Use a framework</span>
        <span>Leading Creative Teams</span>
        <span>Sketch Meetup</span>
      </div>
      <div className="links_wrap">
        <h3>Links</h3>
        <span>Home</span>
        <span>Courses</span>
        <span>About</span>
        <span>Contacts</span>
      </div>
      <div className="icons">
        <Icon.Facebook />
        <Icon.Instagram />
        <Icon.Twitter />
      </div>
    </Wrap>
  );
}
