import * as Yup from "yup"

const loginSchema = Yup.object({
    email : Yup.string().trim()
    .email("Định dạng mail chưa đúng")
    .required("Email không được bỏ trống")
    .lowercase(),

    password : Yup.string().trim()
    .min(6, "Password không được ngắn hơn 6 kí tự")
    .required("Password không được bỏ trống")
    .lowercase(),
})

export default loginSchema