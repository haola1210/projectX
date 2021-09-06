import React, { useEffect, useRef, useState } from 'react';

import { CgAddR } from "react-icons/cg"


const limit = (min, max, value) => {
    if(value <= min) return min
    if(value >= max) return max
    return value
}

function ChangeAvatar(props) {
    //raw file
    const [file, setFile] = useState(null)
    //edited file
    const [imageData, setImageData] = useState(null)

    //ref
    const draggable = useRef(null)
    const droppable = useRef(null)
    const canvasPre = useRef(null)   //preview
    const canvasTar = useRef(null)   //target

    //detect mouse down
    const [isMouseDown, setIsMouseDown] = useState(false)

    // to store initial positon of mouse when mouse down
    const [shift, setShift] = useState({
        x : null,
        y : null
    })
    // to store the position of croped image
    const [pos, setPos] = useState({
        x : null,
        y: null
    })

    const onUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
        e.target.value = null
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
            //clear image
            ctx.clearRect(0, 0, 320, 320)
            
            let img = new Image()
            img.onload = function(){
                //re-size image to fit size of canvas (320x320)
                const ratio = img.width / img.height
                let newWidth;
                let newHeight;
                let leftPad = 0;
                let topPad = 0;
                if(img.width >= img.height){
                    //new size
                    newWidth = 320
                    newHeight = newWidth / ratio

                    //new padding
                    leftPad = 0;
                    topPad = (320 - newHeight) / 2

                } else {
                    //new size
                    newHeight = 320;
                    newWidth = newHeight * ratio

                    //new padding
                    topPad = 0;
                    leftPad = (320 - newWidth) / 2
                }

                //fill the bg if image smaller than box
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, 320, 320);

                //draw image to canvas 
                ctx.drawImage(
                    img, 
                    0, 
                    0, 
                    img.width, 
                    img.height,
                    leftPad,
                    topPad,
                    newWidth, 
                    newHeight
                )

                //set default position of selection box (after upload image)
                setPos({
                    x : draggable.current.offsetLeft,
                    y : draggable.current.offsetTop
                })
            }
            //

            img.src = file
        }
    }, [file])

    useEffect(() => {
       if(typeof pos.x == 'number' && typeof pos.y == 'number') {
            const previewContext = canvasPre.current.getContext("2d")
            const targetContext = canvasTar.current.getContext("2d")
            targetContext.clearRect(0, 0, 240, 240)
            
            const imgData = previewContext.getImageData(pos.x, pos.y, 240, 240)


            targetContext.putImageData(
                imgData, 
                0,
                0
            )
            
            setImageData(imgData)

        }
    }, [pos])

    return (
        <div className="h-full w-full min-w-min bg-gray-200 dark:bg-gray-800 smooth-transform flex flex-col">
            <div className="text-center font-semibold text-lg p-4 sm:pt-32  text-gray-600 dark:text-gray-400 smooth-transform">
                Tải ảnh lên và di chuyển vùng chọn (màu xanh) để cắt ảnh 😍 <br />
                Đổi ảnh bằng cách click ngoài vùng chọn ♻️
            </div>
            <div className="flex flex-row-reverse flex-wrap justify-around items-center">

                {/* target */}
                <canvas
                    ref={canvasTar}
                    className="bg-gray-300 ring-2 ring-blue-400"
                    height={240}
                    width={240}    
                ></canvas>
                
                <div 
                    className="relative ring-2 ring-black cursor-move"
                    ref={droppable}

                    //for PC
                    onMouseMove={handleMove}
                    //for mobile
                    onTouchMove={e => {
                        e.preventDefault()
                        handleMove(e)
                    }}
                >
                    <input type="file" id="upload" className="hidden" onChange={onUpload} />
                    <label htmlFor="upload">
                        {/* bg & droppable */}
                        {
                            !file && 
                            <div className="h-80 w-80 flex justify-center items-center text-gray-400 cursor-pointer ">
                                <CgAddR className="h-1/5 w-1/5" />
                            </div>
                        }
                        {
                            file &&
                            <canvas 
                                ref={canvasPre}
                                className="bg-white w-80 h-80 cursor-pointer"
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
                            // for PC
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            //for mobile
                            onTouchStart={e => {
                                e.preventDefault()
                                handleMouseDown(e)
                            }}
                            onTouchCancel={e => {
                                e.preventDefault()
                                handleMouseUp(e)
                            }}
                        />
                    }
                </div>
            </div>
            <div className="flex justify-center p-4">
                <button className="styled-btn">Xác nhận</button>
            </div>   

            
        </div>
    );
}

export default ChangeAvatar;