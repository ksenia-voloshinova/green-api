import React from 'react';
import "../scss/components/ChatsInner.scss"
import avatar from '../assets/avatar.JPG'

function ChatsInner(props) {
    return (
        <div className='chatItem'>
            <div className="avatar-wrap">
                <img className='avatar' src={avatar} alt="avatar" />
            </div>
            <div className="info-wrap">
                <div className="contact">89673841391</div>
                <div className="message">писька писька писька</div>
            </div>
        </div>
    );
}

export default ChatsInner;