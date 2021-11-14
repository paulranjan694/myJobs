import React from 'react'
import './InputField.style.scss'

function InputField({label, type, name, changeHandler,placeholder,isValidate, error}) {
    return (
        <div className="inputField-group">
            <label>{label}</label>
            <input type={type} name={name} onChange={changeHandler} placeholder={placeholder} 
            className={`${isValidate? 'error__active' : ''} input__value`}/>
            {isValidate && <div className="error">{error}</div>}
        </div>
    )
}

export default InputField
