import React from 'react'
import './nav.css'
import { Link, useLocation } from 'react-router-dom'
import { BsMapFill } from 'react-icons/bs'
import { FaTractor } from 'react-icons/fa'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { motion } from 'framer-motion'
function Nav() {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <motion.div
            className="itemContainer"
            initial={{ top: -100 }}
            animate={{ top: 0 }}
            exit={{ top: -100 }}
            className="nav"
        >
            <Link
                to="/"
                style={{
                    borderBottom:
                        location.pathname == '/'
                            ? 'rgb(105, 0, 131) 2px solid'
                            : 'black 2px solid',
                }}
            >
                <BsMapFill size={21} />
                <h2
                    style={{
                        color:
                            location.pathname == '/'
                                ? 'rgb(105, 0, 131)'
                                : 'black',
                        fontWeight: location.pathname == '/' ? 'bold' : 'unset',
                    }}
                >
                    My Farm
                </h2>
            </Link>
            <Link
                to="/action"
                style={{
                    borderBottom:
                        location.pathname == '/action'
                            ? 'rgb(105, 0, 131) 2px solid'
                            : 'black 2px solid',
                }}
            >
                <FaTractor size={27} />
                <h2
                    style={{
                        color:
                            location.pathname == '/action'
                                ? 'rgb(105, 0, 131)'
                                : 'black',
                        fontWeight:
                            location.pathname == '/action' ? 'bold' : 'unset',
                    }}
                >
                    Action
                </h2>
            </Link>
            <Link
                to="/analytics"
                style={{
                    borderBottom:
                        location.pathname == '/analytics'
                            ? 'rgb(105, 0, 131) 2px solid'
                            : 'black 2px solid',
                    color:
                        location.pathname == '/analytics'
                            ? 'rgb(105, 0, 131)'
                            : 'black',
                }}
            >
                <AiOutlineAreaChart size={27} />
                <h2
                    style={{
                        color:
                            location.pathname == '/analytics'
                                ? 'rgb(105, 0, 131)'
                                : 'black',
                        fontWeight:
                            location.pathname == '/analytics'
                                ? 'bold'
                                : 'unset',
                    }}
                >
                    Analytics
                </h2>
            </Link>
        </motion.div>
    )
}

export default Nav
