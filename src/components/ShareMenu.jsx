import React from 'react';
import "../styles/ShareMenu.css";
import close from "../assets/share/close.png";
import copy from "../assets/share/copy.png";
import instagram from "../assets/share/instagram.png";
import message from "../assets/share/message.png";
import messenger from "../assets/share/messenger.png";
import twitter from "../assets/share/twitter.png";
import whatsapp from "../assets/share/whatsapp.png";


const ShareMenu = (props) => {

    let {toggleShare} = props;

    return (
        <div className="shareMenu">
            <h1 className="shareTitle">Share to...</h1>
            <div className="shareItem">
                <img src={whatsapp} className="shareIcon" alt="whatsapp" />
                <div className="shareText">Whatsapp</div>
            </div>
            <div className="shareItem">
                <img src={twitter} className="shareIcon" alt="twitter" />
                <div className="shareText">Twitter</div>
            </div>
            <div className="shareItem">
                <img src={messenger} className="shareIcon" alt="messenger" />
                <div className="shareText">Messenger</div>
            </div>
            <div className="shareItem">
                <img src={message} className="shareIcon" alt="message" />
                <div className="shareText">Message</div>
            </div>
            <div className="shareItem">
                <img src={instagram} className="shareIcon" alt="instagram" />
                <div className="shareText">Instagram</div>
            </div>
            <div className="shareItem">
                <img src={copy} className="shareIcon" alt="copy" />
                <div className="shareText">Copy Link</div>
            </div>
            <div className="shareItem">
                <div className="shareText">More Options</div>
            </div>
            <button className="closeButton" onClick={toggleShare}>
                <img src={close} className="closeIcon" alt="close" />
            </button>
        </div>
    )
}

export default ShareMenu
