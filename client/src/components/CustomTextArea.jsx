import React, { useEffect, useRef, useState } from 'react';
import { 
    FiSmile
} from "react-icons/fi";

import Picker from 'emoji-picker-react';

function CustomTextArea(props) {
    const maxRow = props.maxRow || 3
    const initHeight = 20
    const E = useRef(null)
    const [value, setValue] = useState("")

    // emoji picker
    const [showPicker, setShowPicker] = useState(false)
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    //add chosen emoji to value text
    useEffect(() => {
        if(chosenEmoji){
            setValue(`${value} ${chosenEmoji.emoji}`)
        }
    }, [chosenEmoji])

    // increase height of textarea if possible
    useEffect(() => {
        E.current.style.height = "inherit"
        E.current.style.height = `${E.current.scrollHeight}px`

        props.setText(value)
    }, [value])

    return (
        <div className={`${props.className} bg-white rounded-md flex justify-center items-end`}>
            <textarea className="w-full outline-none text-sm"
                placeholder={props.placeholder}
                style={{
                    minHeight: initHeight,
                    maxHeight: maxRow * initHeight,
                    overflowY : "auto",
                    resize: "none"
                  }}
                ref={E}
                rows={1}
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <div className="relative">
                {   
                    showPicker &&
                    <div className="absolute bottom-10 right-0">
                        <Picker onEmojiClick={onEmojiClick} />
                    </div>
                }
                <span 
                    className="rounded-btn ml-2 text-base"
                    onClick={() => setShowPicker(prev => !prev)}
                >
                    <FiSmile />
                </span>
            </div>
        </div>
    );
}

export default CustomTextArea;