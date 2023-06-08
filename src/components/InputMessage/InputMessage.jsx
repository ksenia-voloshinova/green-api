import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListMessages, fetchSendMessage } from '../../utils/api';

function InputMessage({activeChatNumber}) {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState('');
  const { idInstance, tokenInstance } = useSelector((state) => state.isAuthorizationSlice);
  
  const onSubmitMessage = (event) => {
    event.preventDefault();
    dispatch(fetchSendMessage({idInstance, tokenInstance ,messageText, activeChatNumber}));
    dispatch(fetchListMessages({ idInstance, tokenInstance, activeChatNumber }));
    setMessageText('');
  };

  const onChangeTextMessage = (event) => {
    setMessageText(event.target.value);
  };
    return (
      <form className="message-text" onSubmit={onSubmitMessage}>
          <input
            className="message-text__input"
            type="text"
            placeholder="Введите сообщение"
            value={messageText} 
            onChange={onChangeTextMessage}
          />
          <input
            className="message-text__button"
            type="submit"
            value="отправить"
          />
      </form>
    );
}

export default InputMessage;