import React from 'react';
import TempAvatar from './TempAvatar';
import { 
    IoAlbumsOutline, 
    IoAlbums
} from "react-icons/io5";
import ChatFooter from './ChatFooter';


function ChatContainer(props) {
    return (
        <div className="flex-grow h-full flex flex-row">

            {/* main window (chat history, chat header, chat footer) */}
            <div className="flex-grow flex flex-col h-full">

                {/* header */}
                <div className="w-full flex flex-row justify-between items-center bg-gray-200 dark:bg-gray-700 smooth-transform rounded-b-md">
                    <div className="flex flex-row items-center p-2 dark:text-gray-300">
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
                    <div className="p-2">
                        <span className="rounded-btn ">
                            {/* unactive button */}
                            <IoAlbumsOutline />

                            {/* active button */}
                            {/* <IoAlbums /> */}
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
            <div className="">
                
            </div>


        </div>
    );
}

export default ChatContainer;