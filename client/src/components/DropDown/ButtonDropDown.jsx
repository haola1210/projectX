import React, { useState } from 'react';

const WrapItem = ({ children }) => (
    <li className="hover:bg-gray-400 px-2 py-1 flex items-center justify-start flex-grow rounded-md">
        { children }
    </li>
)

function ButtonDropDown({ auto, Btn, list }) {
    const [show, setShow] = useState(false)

    return (
        <>
            {
                list && list.length !== 0 && show && 
                (<div 
                    onClick={() => setShow(false)} 
                    className="absolute w-screen h-screen bg-black bg-opacity-20 top-0 left-0" 
                    style={{zIndex : 2}}
                />)
            }
            <div className="relative">
                <div onClick={() => setShow(prev => !prev)} >
                    <Btn />
                </div>

                {list && list.length !== 0 && show && (
                    <div className={`absolute z-10 bg-gray-200 w-${!!auto ? "auto" : "full"} top-8 right-0 flex flex-col w-max rounded-md`}>
                        {
                            list.map((item, id) => (
                                <WrapItem key={id}>{item}</WrapItem>
                            ))
                        }
                    </div>   
                )}
            </div>
        </>  
        
    );
}

export default ButtonDropDown;