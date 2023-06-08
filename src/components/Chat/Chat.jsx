import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListMessages } from "../../utils/api";
import IncomingMessage from "../IncomingMessage/IncomingMessage";
import OutgoingMessage from "../OutgoingMessage/OutgoingMessage";
import InputMessage from "../InputMessage/InputMessage";
import avatar from "../../assets/avatar.svg";
import "./Chat.scss";

function Chat({ activeChatNumber }) {
  const bottomRef = useRef(null);
  const dispatch = useDispatch();
  const { idInstance, tokenInstance } = useSelector((state) => state.isAuthorizationSlice);
  const {messages} = useSelector((state) => state.MessagesChatActiveSlice);

  
  const delay = 10;

  useEffect(() => {
    let timer1 = setInterval(() =>  dispatch(fetchListMessages({ idInstance, tokenInstance, activeChatNumber })), delay * 1000);
    dispatch(fetchListMessages({ idInstance, tokenInstance, activeChatNumber }));
    bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    return () => {
      clearTimeout(timer1);
    };
  }, [activeChatNumber]);

  return (
    <div className="chat-wrapper">
      <div className="header">
        <div className="header__avatar">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
        <div className="header__contact">{activeChatNumber}</div>
      </div>
      <div className="wrapp-messages">
        { 
        Array.from(messages).reverse().map((item) => {
          if (item.type === "outgoing") {
            return (
              <OutgoingMessage
                key={item.idMessage}
                message={item.textMessage}
              />
            );
          } else {
            return (
              <IncomingMessage
                key={item.idMessage}
                message={item.textMessage}
              />
            );
          }
        })}
        <div ref={bottomRef}></div>
      </div>
     <InputMessage activeChatNumber={activeChatNumber}/>
    </div>
  );
}

export default Chat;
