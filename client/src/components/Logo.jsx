import React from 'react';
import { ReactComponent as BrandLogo } from "../assets/logo-final.svg"

function Logo(props) {
    return (
        <div className="flex flex-row items-center cursor-pointer select-none">
            <BrandLogo width="2.5rem" />
            <span className="bg-clip-text bg-gradient-to-t from-green-400 to-blue-700 text-transparent font-bold text-2xl " >Dinolo</span>
        </div>
    );
}

export default Logo;