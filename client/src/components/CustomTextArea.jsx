import React, { useEffect, useRef, useState } from 'react';

function CustomTextArea(props) {
    const maxRow = props.maxRow || 3
    const initHeight = 20
    const E = useRef(null)
    const [value, setValue] = useState("")



    useEffect(() => {
        E.current.style.height = "inherit"
        E.current.style.height = `${E.current.scrollHeight}px`

        props.setText(value)
    }, [value])

    return (
        <div className={`${props.className} bg-white rounded-md flex justify-center`}>
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
        </div>
    );
}

export default CustomTextArea;