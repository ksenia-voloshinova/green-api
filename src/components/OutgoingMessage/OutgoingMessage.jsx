import React from 'react';

function OutgoingMessage({message}) {
    return (
        <>
            <div className="message flex-end">
                <div className="message-outgoing">
                    {message}
                </div>
            </div>
        </>
    );
}

export default OutgoingMessage;