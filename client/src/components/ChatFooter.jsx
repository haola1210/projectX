import React, { useState } from 'react';
import { 
    FiImage,
} from "react-icons/fi";
import { IoSend } from "react-icons/io5";


import useUploadImg from '../hooks/useUploadImg';
import CustomTextArea from './CustomTextArea';
import PreviewImg from './PreviewImg';


function ChatFooter(props) {
    
    const [text, setText] = useState("")
    
    const [data, onChange, onDone, onRemoveOne ] = useUploadImg()

    return (
        <>  
            {/* preview upload images */}
            <div className="flex flex-row justify-start items-center">
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
            <div className="w-full flex flex-row items-end p-2">
                <CustomTextArea 
                    setText={setText}
                    className="flex-grow p-2 text-sm mr-2" 
                    placeholder="Nhắn gì đó đi..."
                />

                {/* button cluster */}
                <div className="pb-2 flex">

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
                    
                    <span className="rounded-btn ml-2" onClick={() => console.log(text)}>
                        <IoSend />
                    </span>
                </div>
            </div>
        </>
    );
}

export default ChatFooter;