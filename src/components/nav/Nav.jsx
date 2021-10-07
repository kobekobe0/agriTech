import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { BsMapFill } from 'react-icons/bs'
import { FaTractor } from 'react-icons/fa'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { motion } from 'framer-motion'
function Nav() {
    return (
        <motion.div
            className="itemContainer"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            exit={{ top: -100 }}
            className="nav"
        >
            <Link to="/">
                <BsMapFill size={21} />
                <h2>My Farm</h2>
            </Link>
            <Link to="/action">
                <FaTractor size={27} />
                <h2>Action</h2>
            </Link>
            <Link to="/analytics" className="active">
                <AiOutlineAreaChart size={27} />
                <h2>Analytics</h2>
            </Link>
        </motion.div>
    )
}

export default Nav
