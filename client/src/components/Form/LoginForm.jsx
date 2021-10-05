import React from 'react';
import { Formik, Form } from "formik"
import loginSchema from './validator/loginValidate'
import CustomInput from './CustomInput';
import { Link } from "react-router-dom"
import { PublicApiInstance } from "../../axios/axios.config"
import { useDispatch } from "react-redux"
import { FETCH_USER_SESSION } from "../../redux/session/sessionActions"
import { STORE_ERROR_MESSAGE } from "../../redux/globalError/errorActions"

const initialValues = {
    email : '',
    password : '',
}

function LoginForm(props) {

    const dispatch = useDispatch()

    const onSubmit = async (values, action) => {
        try {
            const { data } = await PublicApiInstance.post("/auth/login", values)
            console.log("data: ", data)
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
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
        >
        {formik => 
            <Form >
                <CustomInput 
                    name="email" type="email" className="styled-input" 
                    placeholder="Email đăng nhập" autoComplete="new-name" 
                />
                <CustomInput 
                    name="password" type="password" className="styled-input" 
                    placeholder="Mật khẩu" autoComplete="new-password"
                />

                <div className="flex justify-between items-center">
                    <button type="submit" className="styled-btn disabled:opacity-50" 
                        disabled={!formik.isValid || formik.isSubmitting} >Đăng nhập</button>
                    <Link to="/recovery-password" className="text-blue-500 font-semibold" >Quên mật khẩu?</Link>
                </div>
            </Form>
        }
        </Formik>
    );
}

export default LoginForm;