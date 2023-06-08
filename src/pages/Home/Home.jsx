import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListContacts } from '../../utils/api';
import Chat from '../../components/Chat/Chat';
import ListChats from '../../components/ListChats/ListChats';
import './Home.scss';

function Home() {
    const dispatch = useDispatch();
    const { idInstance, tokenInstance } = useSelector((state) => state.isAuthorizationSlice);
    const { activeChatNumber } = useSelector((state) => state.ActiveChatSlice);

    useEffect(() => {
        dispatch(fetchListContacts({idInstance, tokenInstance}))
    },[idInstance, tokenInstance])
    
    return (
        <div className="container">
            <div className='wrapp-content'>
                <ListChats/>
                {activeChatNumber ? 
                <Chat activeChatNumber={activeChatNumber} key={activeChatNumber}/> :
                <div className='chat-wrapper text-centered' >
                    <div >
                        откройте чат
                    </div>
                </div>
                }
            </div>     
        </div>  
    );
}

export default Home;