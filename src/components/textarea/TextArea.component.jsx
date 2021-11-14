import React from 'react'
import './TextArea.style.scss'

function TextArea({label, name, changeHandler,placeholder,isValidate, error, row, col}) {
    return (
        <div className="inputField-group">
            <label>{label}</label>
            <textarea name={name} onChange={changeHandler} placeholder={placeholder} 
            className={`${isValidate? 'error__active' : ''} input__value`} rows={row} cols={col}></textarea>
            {isValidate && <div className="error">{error}</div>}
        </div>
    )
}

export default TextArea