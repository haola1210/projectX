import React from 'react';
import bg from "../assets/dragonball.jpg"

function IndexGreeting(props) {
    return (
        <div 
            className="w-full h-full bg-cover bg-no-repeat bg-center relative" 
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full bg-gray-500 bg-opacity-70 dark:bg-black dark:bg-opacity-70 smooth-transform">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-300 p-2">
                    Không ra ngoài khi không thật sự cần thiết! <br/>
                    Đồng lòng cùng tổ quốc chống dịch 😎
                </span>
            </div>
        </div>
    );
}

export default IndexGreeting;