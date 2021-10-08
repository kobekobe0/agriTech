import React from 'react'
import { useState } from 'react'
import './action.css'
import { motion } from 'framer-motion'

function Action() {
    const [today, setToday] = useState([
        'Blah Blah Blah',
        'Lorem Ipsum Dolor',
        'Mockup text',
        'Mockup text',
    ])
    const [yesterday, setYesterday] = useState([
        'Yesterdaysdsd task',
        'Yesterdasday tassdsk',
        'Yestersdsday task',
    ])
    const [lastWeek, setLastWeek] = useState([
        'Last week task',
        'Last week task',
        'Last week task',
    ])
    return (
        <motion.div
            className="itemContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="action"
        >
            <div className="actionCategory">
                <h2>Today</h2>
                {today.map((text) => (
                    <label class="container">
                        <input type="checkbox" checked="" />
                        <label htmlFor="checkbox">{text}</label>
                    </label>
                ))}
            </div>
            <hr />
            <div className="actionCategory">
                <h2>Yesterday</h2>
                {yesterday.map((text) => (
                    <label class="container">
                        <input type="checkbox" checked="" />
                        <label htmlFor="checkbox">{text}</label>
                    </label>
                ))}
            </div>
            <hr />
            <div className="actionCategory">
                <h2>Last Week</h2>
                {lastWeek.map((text) => (
                    <label class="container">
                        <input type="checkbox" checked="checked" />
                        <label htmlFor="checkbox">{text}</label>
                    </label>
                ))}
            </div>
        </motion.div>
    )
}

export default Action
