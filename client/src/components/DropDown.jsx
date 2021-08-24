import React, { useState } from 'react';

function DropDown({ auto, Btn, ListItem, list }) {
    const [show, setShow] = useState(false)

    return (
         
        <div className="relative">
            <div onClick={() => setShow(prev => !prev)} >
                <Btn />
            </div>

            {show && (<div className={`absolute bg-gray-400 w-${!!auto ? "auto" : "full"} bottom-0-0 right-0 flex flex-col p-3`}>
                {
                    list && list.map((item, id) => (
                            ListItem ? (<ListItem key={id} children={item} />) : <li key={id}>{item}</li>
                    ))
                }
            </div>)}
        </div>
            
        
    );
}

export default DropDown;