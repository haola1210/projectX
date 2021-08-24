import React from 'react';
import bg from "../assets/stayhome.jpg"
import Footer from '../components/Footer';

function Login(props) {
    return (
        <div className="flex-grow w-full flex flex-wrap overflow-y-auto">


            <div className="w-full sm:w-1/2 h-full px-6 flex flex-col justify-center">
                <div className="max-w-lg">

                    <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Cách li ở nhà, chẳng sợ cô đơn
                    </h1>
                    <p className="text-sm font-semibold text-gray-500 mb-4">
                        Năm Cô Vi thứ 3 sau Công nguyên, 
                        dù triều đình đã hành hiệp trượng nghĩa nhưng đáng tiếc thay, 
                        biến chủng lộng hành. Ai ai cũng chịu nhiều khốn khổ. <br />
                        Đối diện với tình cảnh đó đã có Dinolo kết nối triệu đồng bào ❤️
                    </p>
                </div>
                <div className="max-w-xs">

                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Bạn bè đang đợi bạn 😘
                    </h2>

                    <input type="text" className="styled-input" placeholder="Tên đăng nhập" autoComplete="new-name" />
                    <input type="password" className="styled-input" placeholder="Mật khẩu" autoComplete="new-password"/>

                    <div className="flex justify-between items-center">
                        <button className="styled-btn">Đăng nhập</button>
                        <a className="text-blue-500 font-semibold" >Quên mật khẩu?</a>
                    </div>
                    <div className="divide-y">
                        <div className="mt-4 mb-2 text-center">
                            <label className="text-gray-500 ">Chưa có tài khoản?</label>
                            {" "}
                            <a className="text-blue-500 font-semibold" >Đăng kí ngay!</a>
                        </div>
                        <div className="flex justify-between py-4">
                            <a  className="text-xs font-semibold text-gray-200 bg-blue-600 outline-none p-2 rounded-md">Đăng nhập với Facebook</a>
                            <a className="text-xs font-semibold text-gray-200 bg-red-600 outline-none p-2 rounded-md">Đăng nhập với Google</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full sm:w-1/2 h-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage : `url(${bg})` }}>         
            </div>

            <Footer />

        </div>
    );
}

export default Login;