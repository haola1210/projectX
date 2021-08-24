import React from 'react';
import img from "../assets/stayhome.jpg"
import { FiSettings } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import DropDown from './DropDown';

const SettingBtn = (props) => (
    <span className="rounded-btn bg-blue-500 text-gray-200 dark:text-gray-800 dark:bg-yellow-500">
        <FiSettings />
    </span>
)

function ChatMananger(props) {
    const userName = "Hào"
    return (
        <div className="w-full h-full flex flex-col bg-gray-200 dark:bg-gray-800 transition duration-500">

            {/*header */}
            <div className="w-full flex flex-col divide-y-2 bg-gray-300 dark:bg-gray-900 transition duration-500"> 
                
                {/*user & setting icon*/} 
                <div className="w-full flex flex-row flex-none justify-between items-center p-3">  
                    <span className="flex flex-row items-center">
                        <img className="avatar" src={img} alt="user avatar" />
                        <h2 className="font-semibold px-1 text-gray-700 dark:text-gray-400 transition duration-500">
                            {`${userName} ơi! Nhắn cho ai đó đi 😜`}
                        </h2>
                    </span>

                    {/* <DropDown auto={true} list={[1, 2, 3]} Btn={SettingBtn} />  */}
                    <span>
                        <SettingBtn />
                    </span>

                </div>

                {/* search input & result */}
                <div className="w-full px-3 py-2 flex justify-center items-center">
                    <input type="text" className="styled-input rounded-full" placeholder="Search something"/>
                    <span className="rounded-btn m-2 bg-blue-500 text-gray-200 dark:text-gray-800 dark:bg-yellow-500">
                        <BiSearchAlt />
                    </span>
                </div>

            </div>

            {/* body */}
            <div className="w-full flex-grow px-2">

            </div>

        </div>
    );
}

export default ChatMananger;