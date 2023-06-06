import React from 'react';
import '../scss/components/Chat.scss';
import IncomingMessage from '../IncomingMessage/IncomingMessage';
import OutgoingMessage from '../OutgoingMessage/OutgoingMessage';
import avatar from '../assets/avatar.JPG'


function Chat(props) {
    return (
        <div className='chat-wrapper'>
            <div className="header">
                <div className="header__avatar">
                    <img className='avatar' src={avatar} alt="avatar" />
                </div>
                <div className="header__contact">
                    89673841391
                </div>
            </div>
            {/* <div className="chat__relative"> */}
                <div className='wrapp-messages'> 
                    <IncomingMessage/>
                    <OutgoingMessage/>
                </div>
            {/* </div> */}
            

            <div className="message-text">
                <input type="text" placeholder='Введите сообщение'/>
            </div>

        </div>
    );
}

export default Chat;