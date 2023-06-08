import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { setChatsList } from '../../redux/ListChats/slice';
import "./SeacrhChat.scss"


function SeacrhChat(props) {

  const dispatch = useDispatch();
  const [userNumber, setUserNumber] = useState('');
  
  const onSubmitChat = (event) => {
    event.preventDefault();
    dispatch(setChatsList(userNumber));
  };

  const onChangeUserNumber = (event) => {
    setUserNumber(event.target.value);
  };
  
    return (
        <>
        <form action="" className='wrapp-search' onSubmit={onSubmitChat}>
          <input
            className='wrapp-search__input'
            placeholder="Новый чат" 
            value={userNumber} 
            onChange={onChangeUserNumber}
          />
          <input className="wrapp-search__button" type="submit" value="Добавить"/>
        </form>
      </>
    );
}

export default SeacrhChat;