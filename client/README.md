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

bonus cho phan upload file: có thể upload file từ clipboard bằng cách paste vào textarea. sửa lại hàm onchage trong useUploadImg 1 xíu (ngoài nhận params e thì còn nhận 1 option param là files) nếu upload bằng input type file thì dùng e.target còn upload bằng paste thì dùng files
    trong custom textarea có hàm onpaste, check xem nếu có file thì call onchange của useUploadImg với param files.


sử dụng useRouteMatch để xử lí logic render chỗ cpn Main, switch không là chưa đủ vì đụng responsive nữa
chi tiết xem trong cpm Main phần comment


implement upload, show preview, moving selection a part of upload image thành công! sử dụng 2 canvas tags, 1 cái để show preview và resize, 1 div moving selection ở trên, sử dụng ref để trỏ đến dom và sử dụng offset để lấy vị trí hiện tại của 2 div. link tham khảo: https://javascript.info/mouse-drag-and-drop
- đã update thêm touch event cho cái này để sử dụng đc trên mobile


# proxy config:
-   lúc dev thì thêm proxy ở craco.config.js; devServer. Để fetch api thì nó gọn và tiện cho lúc deploy hơn.

# axios:
- tạo axios instance để dễ làm việc
- dùng interceptor để add accessToken vào req và refresh token nếu cần thiết

# form:
- ko muốn mất công code đống xử lí form bằng tay vì k có gì mới và khó, vì v dùng Formik để làm việc với form
- validate form fields với Yup