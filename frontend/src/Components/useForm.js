import React, { useState } from 'react'


export function useForm(initialValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
    }
}

export function Form(props) {

    const { children, ...other } = props;
    return (
        <form autoComplete="off" {...other} data-testid="form">
            {props.children}
        </form>
    )
}

