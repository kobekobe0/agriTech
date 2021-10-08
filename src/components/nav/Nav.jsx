import React from 'react'
import './nav.css'
import { Link, useLocation } from 'react-router-dom'
import { BsMapFill } from 'react-icons/bs'
import { FaTractor, FaStoreSlash } from 'react-icons/fa'
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
                            ? 'rgb(26,174,159) 2px solid'
                            : 'dimgray 2px solid',
                }}
            >
                <BsMapFill
                    size={18}
                    style={{
                        fill:
                            location.pathname == '/'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                    }}
                />
                <h2
                    style={{
                        color:
                            location.pathname == '/'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
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
                            ? 'rgb(26,174,159) 2px solid'
                            : 'dimgray 2px solid',
                }}
            >
                <FaTractor
                    size={23}
                    style={{
                        fill:
                            location.pathname == '/action'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                    }}
                />
                <h2
                    style={{
                        color:
                            location.pathname == '/action'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
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
                            ? 'rgb(26,174,159) 2px solid'
                            : 'dimgray 2px solid',
                    color:
                        location.pathname == '/analytics'
                            ? 'rgb(26,174,159)'
                            : 'dimgray',
                }}
            >
                <AiOutlineAreaChart
                    size={23}
                    style={{
                        fill:
                            location.pathname == '/analytics'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                    }}
                />
                <h2
                    style={{
                        color:
                            location.pathname == '/analytics'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                        fontWeight:
                            location.pathname == '/analytics'
                                ? 'bold'
                                : 'unset',
                    }}
                >
                    Analytics
                </h2>
            </Link>
            <Link
                to="/marketplace"
                style={{
                    borderBottom:
                        location.pathname == '/marketplace'
                            ? 'rgb(26,174,159) 2px solid'
                            : 'dimgray 2px solid',
                    color:
                        location.pathname == '/analytics'
                            ? 'rgb(26,174,159)'
                            : 'dimgray',
                }}
            >
                <FaStoreSlash
                    size={23}
                    style={{
                        fill:
                            location.pathname == '/marketplace'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                    }}
                />
                <h2
                    style={{
                        color:
                            location.pathname == '/marketplace'
                                ? 'rgb(26,174,159)'
                                : 'dimgray',
                        fontWeight:
                            location.pathname == '/marketplace'
                                ? 'bold'
                                : 'unset',
                    }}
                >
                    Marketplace
                </h2>
            </Link>
        </motion.div>
    )
}

export default Nav
