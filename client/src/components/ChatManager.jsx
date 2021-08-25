import React from 'react';
import img from "../assets/stayhome.jpg"
import { FiSettings } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { RiImageEditLine, RiLockPasswordLine } from "react-icons/ri";
import ButtonDropDown from "./DropDown/ButtonDropDown"
import SearchDropDown from './DropDown/SearchDropDown';
import TempAvatar from './TempAvatar';

const SettingBtn = (props) => (
    <span className="rounded-btn bg-blue-500 text-gray-200 dark:text-gray-800 dark:bg-yellow-500">
        <FiSettings />
    </span>
)

const SettingItem = ({icon, content}) => (
    <div className="flex justify-center items-center">
        <span className="pr-1">{icon}</span>
        
        <span className="">{content}</span>
    </div>
)

const settingList = [
    { icon : <FaUserEdit />, content : "Đổi tên" },
    { icon : <RiImageEditLine />, content : "Đổi avatar" },
    { icon : <RiLockPasswordLine />, content : "Đổi mật khẩu" },
]

const listOfSettingItem = settingList.map(({ icon, content }) => <SettingItem icon={icon} content={content} />)

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

                    <ButtonDropDown auto={true} list={listOfSettingItem} Btn={SettingBtn} /> 
                    {/*  */}

                </div>

                {/* search input & result */}
                <SearchDropDown />

            </div>

            {/* body */}
            <div className="w-full flex-grow px-2">
                <TempAvatar character="N" size="sm" />
                <TempAvatar character="N" size="md" />
                <TempAvatar character="N" size="lg" />
            </div>

        </div>
    );
}

export default ChatMananger;