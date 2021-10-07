import React from 'react'
import { CgProfile } from 'react-icons/cg'
import './header.css'

function Header(props) {
    return (
        <div className="header">
            <h1>Title</h1>
            <CgProfile size={40} />
        </div>
    )
}

export default Header
