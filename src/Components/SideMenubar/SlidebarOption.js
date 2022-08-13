import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon, onChangeSidebarHandler }) {
  function onChangeSidebarOption() {
    onChangeSidebarHandler(text);
  }
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>
        <a onClick={onChangeSidebarOption}>{text}</a>
      </h2>
    </div>
  );
}

export default SidebarOption;
