import React from 'react';
import { Formik, Form } from "formik"
import loginSchema from './validator/loginValidate'
import CustomInput from './CustomInput';
import { Link } from "react-router-dom"

const initialValues = {
    email : '',
    password : '',
}

function LoginForm(props) {

    const onSubmit = (values, action) => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
        >
        {formik => 
            <Form>
                <CustomInput 
                    name="email" type="email" className="styled-input" 
                    placeholder="Email đăng nhập" autoComplete="new-name" 
                />
                <CustomInput 
                    name="password" type="password" className="styled-input" 
                    placeholder="Mật khẩu" autoComplete="new-password"
                />

                <div className="flex justify-between items-center">
                    <button type="submit" className="styled-btn">Đăng nhập</button>
                    <Link to="/recovery-password" className="text-blue-500 font-semibold" >Quên mật khẩu?</Link>
                </div>
            </Form>
        }
        </Formik>
    );
}

export default LoginForm;