# how did i complete implement all UI component by myself?
## right here is just all notes
để dùng ảnh trong react cpn thì import cái path đấy vào 1 biến ròi xong dùng biến đó cho url <br>
ex: import bg from "../assets/bg.jpg"
    backGroundImage : `url(${bg})`

viết dropdown button dễ <br>
viết dropdown result of searching thì hơi hard <br>
-   tách logic search sang 1 custom hook và dùng useReduce để xử lí
-   truyền state và những thứ cần thiết từ custom hook sang cpn ui để xử lí logic render


**dùng flexbox muốn container scroll khi child quá nhiều** thì theo link này: https://stackoverflow.com/questions/31870663/make-child-flexbox-container-scrollable

**custom lại textarea thì mở component đấy ra xem. tìm đc cách dùng useRef khá hay.**

**làm phần upload ảnh và preview thì sau khi upload ảnh phải set e.target.value = null để lần sau upload được lên ảnh cũ vừa xóa. chứ ko nó k chạy onchange vì value k change**

*đã làm luôn phần xem ảnh full size như của antd (tự implement lại) cái này bonus cho preview ở trên, click vào ảnh preview sẽ xem đc ảnh full size*

emoji picker của react khá dễ dùng, tuy nhiên hiện tại phải đặt vào trong custom textarea cho dễ thêm vào string value đang gõ.

**bonus cho phan upload file:** có thể upload file từ clipboard bằng cách paste vào textarea. 
-   sửa lại hàm onchage trong useUploadImg 1 xíu (ngoài nhận params e thì còn nhận 1 option param là files) 
-   nếu upload bằng input type file thì dùng e.target còn upload bằng paste thì dùng files
-   trong custom textarea có hàm onpaste, check xem nếu có file thì call onchange của useUploadImg với param files.
<br>

**sử dụng useRouteMatch để xử lí logic render chỗ cpn Main**
-   switch không là chưa đủ vì đụng responsive nữa
chi tiết xem trong cpm `Main` phần comment


**implement upload, show preview, moving selection a part of upload image thành công!** 
-   sử dụng 2 canvas tags, 
    + 1 cái để show preview và resize, 
-   1 div moving selection ở trên, sử dụng ref để trỏ đến dom và sử dụng offset để lấy vị trí hiện tại của 2 div. link tham khảo: https://javascript.info/mouse-drag-and-drop
<br>
*đã update thêm touch event cho cái này để sử dụng đc trên mobile*


# proxy config:
-   lúc dev thì thêm proxy ở craco.config.js; devServer. Để fetch api thì nó gọn và tiện cho lúc deploy hơn.

# axios:
- tạo axios instance để dễ làm việc
- dùng interceptor để add accessToken vào req và refresh token nếu cần thiết
<br>
## Refresh token:
-   1 `instance` gửi request về `private route` sẽ yêu cầu có `accessToken` trong `authorization` headers
-   lấy `accessToken` từ `localStorage` bỏ vào header đấy
-   nếu token hết hạn thì response của req đó sẽ có error code là `401`
    + dùng `interceptor` để bắt gói tin error response và lấy lại `config cũ`
    + call api để lấy access token mới 
    + api để lấy access token mới yêu cầu có `cookies` http only chứa `refreshToken` (đã đăng nhập trc nên sẽ có)
    + nhận đc access token mới thì `update` lại `accessToken` trong `localStorage`
    + cập nhật lại `accessToken` trong `config cũ`
    + return lại `instance` đấy với `config cũ` (để tiếp tục request cũ - lúc nãy bị từ chối do AT expired)

# form:
- ko muốn mất công code đống xử lí form bằng tay vì k có gì mới và khó, vì v dùng Formik để làm việc với form
- validate form fields với Yup

# State management
## redux
    - predictable state container
## react-redux
    - help us connect redux to react
## redux-saga
    - middleware for asynchronous actions of redux

**Folder constructor**
    ./src <br/>
    &emsp; /redux <br/>
    &emsp; &emsp; store.js <br>
    &emsp; &emsp; /someThing <br>
    &emsp; &emsp; &emsp; someThingActions.js <br>
    &emsp; &emsp; &emsp; someThingReducer.js <br>

**Connect redux store to react**: wrap whole app in provider of react-redux with store from redux
<br>

**Use redux state and dispatch in react:** <br>
-   HOC: mapStateToProp, mapDispatchToProp, connect <br>
-   hook: useSelector, useDispatch (i use this)

# React Router
**Custom lại route theo hướng dẫn của docs của react router dom**
*Sử dụng render props để nhận location props*
-   public route thì check nếu đã có user thì từ chối, nếu chưa có thì cho vào
-   private thì đầu tiên là fetch user session
    + check nếu có user thì cho vào
    + nếu chưa có thì từ chối
- từ chối tức là redirect về path trước đó.