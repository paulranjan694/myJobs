import React from 'react'
import { Link } from 'react-router-dom'
import './ContainerFooter.style.scss'

function ContainerFooter({text, url, value}) {
    return (
        <div className="login__footer">
         {text}&nbsp;<Link to={url}>{value}</Link>
      </div>
    )
}

export default ContainerFooter
