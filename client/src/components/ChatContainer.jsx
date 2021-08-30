import React, { useState } from 'react';
import TempAvatar from './TempAvatar';
import { 
    IoAlbumsOutline, 
    IoAlbums
} from "react-icons/io5";
import { 

    IoMdArrowRoundBack
} from "react-icons/io";
import ChatFooter from './ChatFooter';
import SentAlbum from './SentAlbum';

import { useHistory } from "react-router-dom"

function ChatContainer(props) {

    const [isCollapse, setIsCollapse] = useState(true)
    const history = useHistory()

    return (
        <div className="flex-grow h-full flex flex-row">

            {/* main window (chat history, chat header, chat footer) */}
            <div className={`flex-grow ${isCollapse ? 'flex' : 'hidden sm:flex'} flex-col h-full sm:flex-grow`}>

                {/* header */}
                <div className="w-full flex flex-row justify-between items-center bg-gray-200 dark:bg-gray-700 smooth-transform rounded-b-md">
                    
                    {/* user name */}
                    <div className="flex flex-row items-center p-2 dark:text-gray-300">
                        {/* back icon */}
                        <div className="flex pr-1 sm:p-0">
                            <span 
                                className="rounded-btn sm:hidden"
                                onClick={() => history.push("/")}
                            >
                                <IoMdArrowRoundBack />
                            </span>
                        </div>
                        <TempAvatar character="N" />
                        <div className="flex flex-col pl-2">
                            {/* friend name */}
                            <span className="font-semibold text-sm">
                                John Doe
                            </span>

                            {/* active status */}
                            <span className="text-xs">
                                2 giờ trước
                            </span>
                        </div>

                    </div>
                    
                    {/* button collapse album */}
                    <div className="p-2" onClick={() => setIsCollapse(prev => !prev)}>
                        <span className="rounded-btn ">
                            {/* unactive button */}
                            { isCollapse && <IoAlbumsOutline /> }

                            {/* active button */}
                            { !isCollapse && <IoAlbums /> }
                        </span>
                    </div>

                </div>

                {/* chat history */}
                <div className="flex-grow flex flex-col px-2">

                </div>

                {/* chat footer */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 smooth-transform rounded-t-md">
                    <ChatFooter />
                </div>

            </div>

            {/* album of sent images */}
            <div className={`${isCollapse ? 'hidden' : 'flex'} flex-col w-full h-full bg-gray-300 dark:bg-gray-800 sm:max-w-xs smooth-transform`}>
                {/* back icon */}
                <div className="flex p-2">
                    <span 
                        className="rounded-btn sm:hidden"
                        onClick={() => setIsCollapse(true)}
                    >
                        <IoMdArrowRoundBack />
                    </span>

                </div>
                {
                    <SentAlbum onCollapse={setIsCollapse} />
                }
            </div>


        </div>
    );
}

export default ChatContainer;