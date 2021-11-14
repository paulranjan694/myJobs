import React from 'react'
import './Backdrop.style.scss'

function Backdrop({show, closeHandler}) {
    return (
        show ?
        <div className="backdrop__container" onClick={closeHandler}>
        </div> : null
    )
}

export default Backdrop
