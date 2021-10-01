import * as Yup from "yup"

const registerSchema = Yup.object({
    email : Yup.string().trim()
    .email("Định dạng mail chưa đúng")
    .required("Email không được bỏ trống")
    .lowercase(),
    nickName : Yup.string().trim()
    .min(6, "Nick name của bạn phải dài hơn 6 kí tự")
    .max(20, "Nick name của bạn phải ngắn hơn 20 kí tự")
    .required("Nick name không được bỏ trống"),
    password : Yup.string().trim()
    .min(6, "Password không được ngắn hơn 6 kí tự")
    .required("Password không được bỏ trống")
    .lowercase(),
    confirmPassword : Yup.string().trim()
    .min(6, "Confirmed password không được ngắn hơn 6 kí tự")
    .required("Confirm password không được bỏ trống")
    .oneOf([Yup.ref('password'), null], 'Confirmed password phải trùng với passwords')
    .lowercase()
})

export default registerSchema