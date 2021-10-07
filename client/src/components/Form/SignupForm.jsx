import React from 'react';
import { Formik, Form } from "formik"
import registerSchema from './validator/registerValidate'
import CustomInput from './CustomInput';
import { Link } from "react-router-dom"
import { PublicApiInstance } from "../../axios/axios.config"
import { useDispatch } from "react-redux"
import { FETCH_USER_SESSION } from "../../redux/session/sessionActions"
import { STORE_ERROR_MESSAGE } from "../../redux/globalError/errorActions"

const initialValues = {
    email : '',
    nickName : '',
    password : '',
    confirmPassword : '',
}


function SignupForm(props) {
    const dispatch = useDispatch()

    const onSubmit = async (values, action) => {
        try {
            console.log(values, action)
            const { data } = await PublicApiInstance.post("/auth/register", {...values})
            localStorage.setItem("accessToken", data.accessToken)
            action.resetForm()
            
            dispatch({ type : FETCH_USER_SESSION })

        } catch (error) {
            if(error.response !== undefined){
                const { data } = error.response
    
                console.log("err: ", data)
                if(data.key){
                    action.setFieldError(data.key, data.message)
                } else {
                    dispatch({
                        type : STORE_ERROR_MESSAGE,
                        payload : {
                            errorMessage : data.message
                        }
                    })
                }
                action.setSubmitting(false)
            }
        }  
    }

    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {registerSchema}
            onSubmit = {onSubmit}
        >
            {formik => (
                <Form>
                    <CustomInput name="nickName" type="text" className="styled-input" placeholder="Nick name" autoComplete="new-name" />
                    <CustomInput name="email" type="email" className="styled-input" placeholder="Email đăng nhập" autoComplete="new-name" />
                    <CustomInput name="password" type="password" className="styled-input" placeholder="Mật khẩu" autoComplete="new-password" />
                    <CustomInput name="confirmPassword" type="password" className="styled-input" placeholder="Nhập lại mật khẩu" autoComplete="new-password" />

                    <div className="flex justify-between items-center">
                        <button type="submit" className="styled-btn disabled:opacity-50" disabled={!formik.isValid || formik.isSubmitting }>Đăng Kí</button>
                        <Link to="/login" className="text-blue-600 font-semibold" >Về trang đăng nhập</Link>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SignupForm;