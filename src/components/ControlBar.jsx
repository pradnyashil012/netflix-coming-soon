import React, { useState } from "react";
import "../styles/ControlBar.css";
import "font-awesome/css/font-awesome.min.css";
import ShareMenu from "./ShareMenu";

const ControlBar = (props) => {
  let { logo } = props;

  const [isRemindMeChecked, setReminder] = useState(false);
  const [isSharedVisible, setShare] = useState(false);

  return (
    <div className="controlBar">
      <img
        src={require(`../assets/movies/${logo}`).default}
        alt="logo"
        className="titleLogo"
      />
      <div className="controls">
        <div
          className="control remindMe"
          onClick={() => {
            setReminder(!isRemindMeChecked);
          }}
        >
          {!isRemindMeChecked && <i className="icon fa fa-bell"></i>}
          {isRemindMeChecked && (
            <i className="icon fa fa-check remindMeChecked"></i>
          )}
          <span
            className={`controlLabel ${
              isRemindMeChecked ? "remindMeChecked" : ""
            }`}
          >
            {isRemindMeChecked ? "Reminder" : "Remind Me"}
          </span>
        </div>
        <div
          className="control share"
          onClick={() => {
            setShare(!isSharedVisible);
          }}
        >
          <i
            className={`icon fa fa-share-alt ${
              isSharedVisible ? "shareChecked" : ""
            }`}
          ></i>
          <span
            className={`controlLabel ${isSharedVisible ? "shareChecked" : ""}`}
          >
            Share
          </span>
        </div>
      </div>
      {isSharedVisible && (
        <ShareMenu toggleShare={() => setShare(!isSharedVisible)} />
      )}
    </div>
  );
};

export default ControlBar;
