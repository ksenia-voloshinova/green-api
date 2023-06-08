import React from 'react';
import { useDispatch} from 'react-redux';
import { setActiveChat } from '../../redux/ActiveChat/slice';
import avatar from '../../assets/avatar.svg'
import "./ChatsInner.scss"

function ChatsInner({item}) {
  const dispatch = useDispatch();

    const openChat = () => {
        dispatch(setActiveChat(item));
    };
    return (
        <div className='chatItem' onClick={openChat}>
            <div className="avatar-wrap">
                <img className='avatar' src={avatar} alt="avatar" />
            </div>
            <div className="info-wrap">
                <div className="contact">{item}</div>
            </div>
        </div>
    );
}

export default ChatsInner;