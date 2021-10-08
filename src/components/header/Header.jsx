import React from 'react'
import { CgProfile } from 'react-icons/cg'
import './header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="header">
            {location.pathname == '/' ? <h1>My Farm</h1> : null}
            {location.pathname == '/action' ? <h1>Actions</h1> : null}
            {location.pathname == '/analytics' ? <h1>Analytics</h1> : null}
            {location.pathname == '/marketplace' ? <h1>Marketplace</h1> : null}
            <CgProfile size={40} style={{ fill: 'gray' }} />
        </div>
    )
}

export default Header
