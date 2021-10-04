import React from 'react';
import { ImSpinner9 } from "react-icons/im";

function Loading(props) {
    return (
        <div className="w-full flex-grow flex justify-center items-center ">
            <ImSpinner9 className="text-4xl text-blue-600 dark:text-blue-300 smooth-transform animate-spin" />
        </div>
    );
}

export default Loading;