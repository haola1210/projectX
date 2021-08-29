import React, { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";


function PreviewImg({ src, remove }) {

    const [show, setShow] = useState(false)

    return (
        <>  
            {/* modal full screen */}
            {   
                show &&
                <div className="absolute z-10 top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-80 p-4">
                    <span 
                        className="absolute text-xl z-20 top-4 right-0 rounded-full bg-yellow-400 hover:bg-red-500 text-gray-800" 
                        onClick={() => setShow(false)}
                    >
                        <TiDeleteOutline />
                    </span>
                    <img 
                        src={src}
                        className="h-full w-auto" 
                    />
                </div>
            }

            {/* preview small image */}
            <div className="relative p-2 " >
                {
                    remove &&
                    <span 
                        className="absolute top-0 right-0 rounded-full bg-yellow-400 hover:bg-red-500 text-gray-800" 
                        onClick={remove}
                    ><TiDeleteOutline /></span>
                }
                
                <img 
                    onClick={() => setShow(true)}
                    src={src}
                    className="h-16 w-auto rounded-md border-2 border-transparent hover:border-blue-400" 
                />
            </div>
        </>
    );
}

export default PreviewImg;