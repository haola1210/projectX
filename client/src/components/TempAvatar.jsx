import React from 'react';

function TempAvatar({ character, size = "sm" }) {   //size: [sm, md, lg]
    const colors = [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
    ]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const hw = {
        sm : `h-7 w-7`,
        md : `h-8 w-8`,
        lg : `h-9 w-9`,
    }

    return (
        <span className={`temp-avatar bg-${randomColor}-500 text-${size} ${hw[size]}`}>
            { character }
        </span>
    );
}

export default TempAvatar;