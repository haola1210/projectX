import React, { useState } from 'react';
import { 
    FiImage,
    FiSmile
} from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import CustomTextArea from './CustomTextArea';


function ChatFooter(props) {
    
    const [text, setText] = useState("")

    return (
        <div className="w-full flex flex-row items-center p-2">

            <CustomTextArea 
                setText={setText}
                className="flex-grow p-2 text-sm mr-2" 
                placeholder="Nhắn gì đó đi..."
            />

            <span className="rounded-btn">
                <FiImage />
            </span>
            <span className="rounded-btn ml-1">
                <FiSmile />
            </span>
            <span className="rounded-btn ml-1" onClick={() => console.log(text)}>
                <IoSend />
            </span>
        </div>
    );
}

export default ChatFooter;