import React from 'react';
import Chat from '../components/Chat';
import ListChats from '../components/ListChats';
import '../scss/pages/Home.scss';


function Home(props) {
    return (
        <div className="container">
            <div className='wrapp-content'>
                <ListChats/>
                <Chat/>
            </div>
            
        </div>
       
    );
}

export default Home;