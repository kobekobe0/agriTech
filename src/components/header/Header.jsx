import React from 'react'
import { CgProfile } from 'react-icons/cg'
import './header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <div className="header">
            {location.pathname == '/' ? <h1>Map</h1> : null}
            {location.pathname == '/action' ? <h1>Tasks</h1> : null}
            {location.pathname == '/analytics' ? <h1>Analytics</h1> : null}
            <CgProfile size={40} />
        </div>
    )
}

export default Header
