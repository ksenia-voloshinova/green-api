import React from 'react';
import { useSelector } from 'react-redux';
import ChatsInner from '../ChatsInner/ChatsInner';
import SeacrhChat from '../SearchChat/SearchChat';
import './ListChat.scss';


function ListChats() {
  const { chats } = useSelector((state) => state.ListChatsSlice);
    
    return (
        <div className='chats-wrapper'>
            <SeacrhChat/>
            {chats.map((item, index) => (
                <ChatsInner key={index} item={item}/>
            ))}

        </div>
    );
}

export default ListChats;