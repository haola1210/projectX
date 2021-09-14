import React from 'react';
import { Link } from "react-router-dom"

function RecoveryPassword(props) {
    return (
        <div className="flex-grow w-full flex flex-col flex-wrap justify-center items-center">
            <div className="">
                <div className="w-max mb-4">
                    <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Bạn quên mật khẩu?
                    </h1>
                    <p className="text-sm text-gray-500 font-semibold">
                        Lấy lại mật khẩu sau 2 bước <br/>
                        - Nhập email và Một trong Ba mật khẩu gần nhất <br/>
                        - Kiểm tra mail và đăng nhập với mật khẩu mới
                    </p>
                </div>
                <div className="max-w-xs">
                    <h2 className="text-lg font-semibold text-gray-700 pb-2 dark:text-gray-400 smooth-transform">
                        Lấy lại mật khẩu ngay
                    </h2>
                    <input type="email" className="styled-input" placeholder="Email đăng nhập" autoComplete="new-name"/>
                    <input type="password" className="styled-input" placeholder="1 trong 3 mật khẩu gần nhất" autoComplete="new-password"/>
                    <div className="flex justify-between items-center">
                        <button className="styled-btn">Gửi yêu cầu</button>
                        <Link to="/login" className="text-blue-600 font-semibold" >Về trang đăng nhập</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecoveryPassword;