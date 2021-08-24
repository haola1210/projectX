import React from 'react';
import Footer from '../components/Footer';
import bg from "../assets/colenvn.jpg"

function Signup(props) {
    return (
        <div className="flex-grow w-full flex flex-wrap overflow-y-auto">
            <div className="relative w-full h-full bg-no-repeat bg-top bg-opacity-10" style={{ backgroundImage : `url(${bg})` }}> {/* big background  */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 z-10"></div>  {/* opacity layer */}
                <div className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center z-20" style={{ backgroundImage : `url(${bg})` }}>  {/*small bg */}</div>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-300  bg-opacity-80 z-30 dark:bg-gray-800 dark:bg-opacity-80 transition duration-500"></div>  {/*opacity layer */}

                <div className="absolute top-0 left-0 w-full h-full z-40 flex flex-col px-6 justify-center"> {/*main content */}
                    <div className="max-w-lg">
                        <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                            Yêu Tổ quốc, yêu đồng bào <br />
                            Ai ở chỗ nào, ở yên chỗ đấy
                        </h1>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 ">
                            Dinolo tự hào đồng hành cùng người Việt trong công cuộc
                            chiến đấu chống lại đại dịch này. Tham gia Dinolo ngay hôm nay để
                            kết nối với bạn bè trong mùa giãn cách 🙌 <br />
                            Sợ xa mặt cách lòng? Đã có Dinolo <br/>
                            Cần chi đi đâu xa? Ở nhà dùng Dinolo  
                        </p>
                    </div>
                    <div className="w-full max-w-xs">
                        <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-1">
                            Đăng kí siêu lẹ 😘
                        </h2>
                        <input type="text" className="styled-input" placeholder="Nick name" autoComplete="new-name" />
                        <input type="text" className="styled-input" placeholder="Tên đăng nhập" autoComplete="new-name" />
                        <input type="password" className="styled-input" placeholder="Mật khẩu" autoComplete="new-password" />
                        <input type="password" className="styled-input" placeholder="Nhập lại mật khẩu" autoComplete="new-password" />

                        <div className="flex justify-between items-center">
                            <button className="styled-btn">Đăng Kí</button>
                            <a className="text-blue-600 font-semibold" >Về trang đăng nhập</a>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;