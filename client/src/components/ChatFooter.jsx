import React, { useState } from 'react';
import { 
    FiImage,
    FiSmile
} from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

import useUploadImg from '../hooks/useUploadImg';
import CustomTextArea from './CustomTextArea';


const PreviewImg = ({ className, src, remove }) => (
    <div className="relative p-2" >
        <span 
            className="absolute top-0 right-0 rounded-full bg-red-500 text-gray-800" 
            onClick={remove}
        ><TiDeleteOutline /></span>
        <img src={src}
            className="h-12 w-auto rounded-md" 
            // style={{ backgroundImage : `url(${src})` }} 
        />
    </div>
) 

function ChatFooter(props) {
    
    const [text, setText] = useState("")
    
    const [data, onChange, onDone, onRemoveOne ] = useUploadImg()

    return (
        <>  
            {/* preview upload images */}
            <div className="flex flex-row justify-center items-center">
                {
                    data.previews.map((url, index) => 
                        <PreviewImg 
                            key={index}
                            src={url} 
                            remove={() => onRemoveOne(index)}
                        />
                    )
                }
            </div>

            {/* main */}
            <div className="w-full flex flex-row items-center p-2">
                <CustomTextArea 
                    setText={setText}
                    className="flex-grow p-2 text-sm mr-2" 
                    placeholder="Nhắn gì đó đi..."
                />
                <label htmlFor="upload">
                    <span className="rounded-btn">
                        <input 
                            type="file" 
                            id="upload" 
                            className="hidden" 
                            multiple={true} 
                            onChange={onChange}
                        />
                        
                        <FiImage />
                    </span>
                </label>
                <span className="rounded-btn ml-1">
                    <FiSmile />
                </span>
                <span className="rounded-btn ml-1" onClick={() => console.log(text)}>
                    <IoSend />
                </span>
            </div>
        </>
    );
}

export default ChatFooter;