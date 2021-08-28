để dùng ảnh trong react cpn thì import cái path đấy vào 1 biến ròi xong dùng biến đó cho url 
ex: import bg from "../assets/bg.jpg"
    backGroundImage : `url(${bg})`

viết dropdown button dễ
viết dropdown result of searching thì hơi hard
    tách logic search sang 1 custom hook và dùng useReduce để xử lí
    truyền state và những thứ cần thiết từ custom hook sang cpn ui để xử lí logic render

create axios instance để sau này tiện dùng, config và xử lí refresh token

dùng flexbox muốn container scroll khi child quá nhiều thì theo link này: https://stackoverflow.com/questions/31870663/make-child-flexbox-container-scrollable

custom lại textarea thì mở component đấy ra xem. tìm đc cách dùng useRef khá hay.

@ làm phần upload ảnh và preview thì sau khi upload ảnh phải set e.target.value = null để lần sau upload được lên ảnh cũ vừa xóa. chứ ko nó k chạy onchange vì value k change 

đã làm luôn phần xem ảnh full size như của antd (tự implement lại) cái này bonus cho preview ở trên, click vào ảnh preview sẽ xem đc ảnh full size

emoji picker của react khá dễ dùng, tuy nhiên hiện tại phải đặt vào trong custom textarea cho dễ thêm vào string value đang gõ.

