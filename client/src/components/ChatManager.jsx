import React from 'react';
import img from "../assets/stayhome.jpg"
import { FiSettings } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { 
    RiImageEditLine, 
    RiLockPasswordLine,
    RiLogoutBoxRLine
} from "react-icons/ri";
import ButtonDropDown from "./DropDown/ButtonDropDown"
import SearchDropDown from './DropDown/SearchDropDown';
import NewMessageBox from './NewMessage/NewMessageBox';

import { Link } from "react-router-dom"

const SettingBtn = (props) => (
    <span className="rounded-btn bg-blue-500 text-gray-200 dark:text-gray-800 dark:bg-yellow-500 smooth-transform">
        <FiSettings />
    </span>
)

const SettingItem = ({icon, content, to}) => (
    <Link to={to}>
        <div className="flex justify-center items-center">
            <span className="pr-1">{icon}</span>
            
            <span className="">{content}</span>
        </div>
    </Link>
)

const settingList = [
    { icon : <FaUserEdit />, content : "Đổi tên", to : "change-name" },
    { icon : <RiImageEditLine />, content : "Đổi avatar", to : "/change-avatar" },
    { icon : <RiLockPasswordLine />, content : "Đổi mật khẩu", to : "change-password" },
    { icon : <RiLogoutBoxRLine />, content : "Đăng xuất", to : "/logout" },
]

const listOfSettingItem = settingList.map(({ icon, content, to }) => <SettingItem icon={icon} content={content} to={to} />)

function ChatMananger(props) {
    const userName = "Hào"
    return (
        <div className="w-full sm:max-w-xs h-full flex flex-col bg-gray-200 dark:bg-gray-800 transition duration-500">

            {/*header */}
            <div className="flex flex-col bg-gray-300 dark:bg-gray-900 transition duration-500 border-b-2"> 
                
                {/*user & setting icon*/} 
                <div className="flex flex-row flex-none justify-between items-center p-3">  
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
            <div className="flex-grow relative overflow-y-auto">
                <NewMessageBox />
            </div>

        </div>
    );
}

export default ChatMananger;