để dùng ảnh trong react cpn thì import cái path đấy vào 1 biến ròi xong dùng biến đó cho url 
ex: import bg from "../assets/bg.jpg"
    backGroundImage : `url(${bg})`

viết dropdown button dễ
viết dropdown result of searching thì hơi hard
    tách logic search sang 1 custom hook và dùng useReduce để xử lí
    truyền state và những thứ cần thiết từ custom hook sang cpn ui để xử lí logic render

create axios instance để sau này tiện dùng, config và xử lí refresh token