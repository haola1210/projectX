import React, { useEffect, useRef, useState } from 'react';

import { CgAddR } from "react-icons/cg"

function ChangeAvatar(props) {

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const draggable = useRef(null)
    const droppable = useRef(null)
    
    const canvasPre = useRef(null)
    const canvasTar = useRef(null)

    const [isMouseDown, setIsMouseDown] = useState(false)

    // to store initial positon of mouse when mouse down
    const [shift, setShift] = useState({
        x : null,
        y : null
    })
    // to store the positon of croped image
    const [pos, setPos] = useState({
        x : null,
        y: null
    })

    const onUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
        e.target.value = null
    }


    const limit = (min, max, value) => {
        if(value < min) return min
        if(value > max) return max
        return value
    }

    const handleMouseDown = e => {
        setShift({
            x : e.pageX - (draggable.current.offsetLeft + droppable.current.offsetLeft),
            y : e.pageY - (draggable.current.offsetTop + droppable.current.offsetTop)
        })

        setIsMouseDown(true)
    }
    const handleMouseUp = e => {
        setShift({
            x : null,
            y : null
        })
        setIsMouseDown(false)

        //store position
        setPos({
            x : draggable.current.offsetLeft,
            y : draggable.current.offsetTop
        })
    }

    const handleMove = e => {
        if(isMouseDown){

            // get coordinate of mouse on droppable
            let rangeX = e.pageX - droppable.current.offsetLeft
            let rangeY = e.pageY - droppable.current.offsetTop
            
            // set top left and limit theme
            let left = limit(0, 80, rangeX - shift.x)
            let top = limit(0, 80, rangeY - shift.y)
            

            // set draggable move
            draggable.current.style.left = `${left}px`
            draggable.current.style.top = `${top}px`

        }
    }

    useEffect(() => {
        if(file){
            const ctx = canvasPre.current.getContext("2d")
            ctx.restore()
            let img = new Image();
            img.onload = function(){
                ctx.drawImage(
                    img, 
                    pos.x, 
                    pos.y, 
                    img.width, 
                    img.height,
                    0,
                    0,
                    canvasPre.current.width, 
                    canvasPre.current.height
                )
            }
            img.src = file
        }
    }, [file])

    useEffect(() => {
       if(!!pos.x && !!pos.y) {
            const ctx = canvasTar.current.getContext("2d")
            ctx.restore()
            let img = new Image();
            img.onload = function(){
                ctx.drawImage(
                    img, 
                    pos.x, 
                    pos.y, 
                    img.width, 
                    img.height,
                    0,
                    0,
                    canvasTar.current.width, 
                    canvasTar.current.height
                )
            }
            img.src = file
        }
    }, [pos])

    return (
        <div className="h-full w-full min-w-min bg-gray-200 dark:bg-gray-800 smooth-transform flex flex-row-reverse flex-wrap justify-around items-center">
            
            {/* preview */}
            <canvas
                ref={canvasTar}
                className="bg-gray-300"
                height={240}
                width={240}    
            ></canvas>
            
            <div 
                className="relative ring-2 ring-black"
                onMouseMove={handleMove}
                ref={droppable}
            >
                <input type="file" id="upload" className="hidden" onChange={onUpload} />
                <label htmlFor="upload">
                    {/* bg & droppable */}
                    {
                        !file && 
                        <div className="h-80 w-80 flex justify-center items-center text-gray-400">
                            <CgAddR className="h-1/5 w-1/5" />
                        </div>
                    }
                    {
                        file &&
                        <canvas 
                            ref={canvasPre}
                            className="bg-white w-80 h-80"
                            height={320}
                            width={320}
                        >
                        </canvas>
                    }
                </label>
                {/* draggable frame */}
                {
                    file &&
                    <div 
                        ref={draggable}
                        className="border-2 border-blue-500 h-60 w-60 absolute bg-blue-200 bg-opacity-50 z-10 top-10 left-10"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    />
                }
            </div>

            
        </div>
    );
}

export default ChangeAvatar;