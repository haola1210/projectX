import React from 'react';
import TempAvatar from '../TempAvatar';

import { NavLink } from "react-router-dom"

function NewMessageItem({ avatarUrl, friendName, time, content }) {
    return (
        <NavLink to="/chat/abc" activeStyle={{ 
            backgroundColor: `rgba(0, 0, 0, 0.2)`,
            display: "flex"
         }}>
            <div className="max-w-full flex flex-row justify-center items-center bg-transparent relative p-4">
                <div className="absolute w-full h-full top-0 left-0 opacity-10 bg-black hover:opacity-20" />
                <div className="flex-none">
                    {
                        avatarUrl ? (<img src={avatarUrl} />) : <TempAvatar character={friendName[0]} />
                    }
                </div>

                <div className="flex-grow flex flex-col pl-2 dark:text-gray-200" style={{ maxWidth : `calc(100% - 28px)` }}>
                    {/* name & time */}
                    <div className="flex flex-row justify-between text-sm ">
                        <span className="font-semibold truncate">
                            { friendName }
                        </span>
                        <span className="pl-1 text-sx flex-shrink-0">
                            { time }
                        </span>
                    </div>

                    {/* content */}
                    <div className=" truncate">
                        { content }
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default NewMessageItem;