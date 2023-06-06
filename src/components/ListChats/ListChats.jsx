import React from 'react';
import '../scss/components/ListChat.scss';
import ChatsInner from './ChatsInner';
import SeacrhChat from '../SearchChat/SearchChat';


function ListChats(props) {
    return (
        <div className='chats-wrapper'>
            <SeacrhChat/>
            <ChatsInner/>
            <ChatsInner/>
        </div>
    );
}

export default ListChats;