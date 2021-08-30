import React, { useEffect, useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatManager from '../components/ChatManager';
import IndexGreeting from '../components/IndexGreeting';

import { 
    Route,
    Switch,
    useParams,
    useRouteMatch
 } from 'react-router-dom'

function Main(props) {

    let matchChat = useRouteMatch("/chat/:chatId")

    /**  logic render and responsive
     * matchChat === null => show left,                             hide right (show right when above 'sm')
     * matchChat !== null =>
     *                       hide left (show left when above 'sm'), show right (hide 'back' icon when above 'sm')
     *  
     * 
     * 
     */

    return (
        <div className="w-full flex-grow flex flex-row divide-x">
            {/* Left */}
            <div className={`w-full h-full ${matchChat === null ? 'flex' : 'hidden sm:flex'} sm:max-w-xs`}>
                <ChatManager />
            </div>

            {/* Right */}
            <div className={`w-full h-full ${matchChat === null ? 'hidden sm:flex' : 'flex'} flex-grow`}>
                <Switch>
                    <Route path="/chat/:chatId">
                        <ChatContainer />
                    </Route>
                    <Route path="/">
                        <IndexGreeting />
                    </Route>
                </Switch>
            </div>


        </div>
    );
}

export default Main;