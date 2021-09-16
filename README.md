# chat app - author: Hao Le
self-practice

* tech: 
-   api expressjs, mongoDB Atlas, cloudinary, bearer auth (jwt) + token refreshing, cors, joi
-   client reactjs, redux, redux saga, axios, socket-io

* server side validate with `joi`
-   cách sử dụng như docs hướng dẫn
-   custom error message bằng cách thêm .messages({ //json  })
-   check ERROR list trong docs để biết key của khối json trên
-   filter các key-value gửi lên bằng 'unknown' với tham số allow = false, custom lại err mess bằng messages
-   vi messages ko support any.valid nên dùng any.only cho valid(joi.ref(...))  // check confirm password ở register
-   link: https://github.com/sideway/joi/issues/2147#issuecomment-537372635

* Dùng http-errors để create err, tiện handle err ở cuối hơn