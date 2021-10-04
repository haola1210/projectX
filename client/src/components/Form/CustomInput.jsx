import React from 'react';
import { Field, ErrorMessage } from "formik"

function CustomInput(props) {
    const { name, ...rest } = props
    return (
        <div>
            <Field name={name}  >
                {({ field }) => (
                    <input {...field} {...rest}/>
                )}
            </Field>
            <ErrorMessage name={name}>
                {msg => (
                    <div className="text-xs dark:text-red-300 text-red-700 font-semibold mb-2">{msg}</div>
                )}
            </ErrorMessage>
        </div>
    );
}

export default CustomInput;