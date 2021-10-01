import React from 'react';
import { Formik, Form } from "formik"
import registerSchema from './validator/registerValidate'
import CustomInput from './CustomInput';
import { Link } from "react-router-dom"
import { PrivateApiInstance } from "../../axios/axios.config"

const initialValues = {
    email : '',
    nickName : '',
    password : '',
    confirmPassword : '',
}


function SignupForm(props) {

    const onSubmit = async (values, action) => {
        try {
            console.log(values, action)
            const { data } = await PrivateApiInstance.post("/auth/register", {...values})
            
        } catch (error) {
            console.log(error)
        }
        action.resetForm()
        action.setSubmitting(false)
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