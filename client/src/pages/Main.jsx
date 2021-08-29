import React from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatManager from '../components/ChatManager';
function Main(props) {
    return (
        <div className="w-full flex-grow flex flex-row divide-x">
            {/* <ChatManager /> */}
            <ChatContainer />
        </div>
    );
}

export default Main;