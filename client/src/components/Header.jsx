import React from 'react';
import Logo from './Logo';
import useDarkMode from '../hooks/useDarkMode';
import { ImSun } from "react-icons/im";
import { RiMoonClearFill } from "react-icons/ri";
import { Link } from "react-router-dom"

function Header(props) {

    const [nextTheme, setTheme] = useDarkMode()

    return (
        <div className="max-h-12 h-auto w-full bg-gray-50 flex flex-row items-center justify-between px-3 py-1 shadow-md dark:bg-black transition duration-500">
            <Link to="/">
                <Logo />
            </Link>
            <span className="cursor-pointer " onClick={() => setTheme(nextTheme)} >
                {
                    nextTheme === "dark" ? 
                    <RiMoonClearFill className="text-purple-500" /> : 
                    <ImSun className="text-yellow-500" />
                }
            </span>
        </div>
    );
}

export default Header;