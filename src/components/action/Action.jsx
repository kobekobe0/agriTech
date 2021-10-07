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
        'Lorem Ipsum Dolor',
    ])
    const [yesterday, setYesterday] = useState([
        'yesterdaysdsd task',
        'yesterdasday tassdsk',
        'yestersdsday task',
        'yesterday tadsdsk',
        'yestedasdasdrday task',
        'yestday task',
        'yesterday tasadassk',
    ])
    const [lastWeek, setLastWeek] = useState([
        'Last week task',
        'Last week task',
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
                        <span class="checkmark"></span>
                        {text}
                    </label>
                ))}
            </div>
            <div className="actionCategory">
                <h2>Yesterday</h2>
                {yesterday.map((text) => (
                    <label class="container">
                        <input type="checkbox" checked="" />
                        <span class="checkmark"></span>
                        {text}
                    </label>
                ))}
            </div>
            <div className="actionCategory">
                <h2>Last Week</h2>
                {lastWeek.map((text) => (
                    <label class="container">
                        <input type="checkbox" checked="" />
                        <span class="checkmark"></span>
                        {text}
                    </label>
                ))}
            </div>
        </motion.div>
    )
}

export default Action
