import React, { useState } from 'react';
import PreviewImg from './PreviewImg';

function SentAlbum(props) {

    const [files, setFiles] = useState([])

    return (
        <div className="w-full h-full flex flex-col p-2 divide-y">
            <div className="text-sm text-gray-800 dark:text-gray-400 underline font-semibold">
                @Những ảnh đã gửi
            </div>
            <div className="flex flex-wrap flex-grow overflow-y-auto justify-center items-start py-2">
                {
                    files.length === 0 && 
                    <span className="text-sm text-gray-500  font-semibold p-3 bg-gray-400 dark:bg-gray-600 rounded-full">
                        Các bạn chưa gửi ảnh nào!
                    </span>
                }
                {
                    // sent images here
                    files.map(file => <PreviewImg src={files} />)
                }
            </div>
        </div>
    );
}

export default SentAlbum;