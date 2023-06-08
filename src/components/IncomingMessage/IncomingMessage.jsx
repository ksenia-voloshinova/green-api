import React from 'react';

function IncomingMessage({message}) {
    return (
        <>
            <div className="message flex-start">
                <div className="message-income">
                    {message}
                </div>
            </div>        
        </>
        
    );
}

export default IncomingMessage;