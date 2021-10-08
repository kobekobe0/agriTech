import React from 'react'
import { useState } from 'react'
import './action.css'
import ReactStars from 'react-rating-stars-component'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

import ProgressBar from '@ramonak/react-progress-bar'

function Action() {
    const [today, setToday] = useState([
        'Blah Blah Blah',
        'Lorem Ipsum Dolor',
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="action"
        >
            <div className="progress">
                <h1>Progress</h1>
                <ProgressBar
                    completed={33}
                    bgColor="#1aae9f"
                    isLabelVisible={false}
                    baseBgColor="#e6e6e6"
                    labelColor="#e80909"
                    labelSize="10px"
                    padding="5px"
                    transitionDuration="5s"
                    transitionTimingFunction="ease"
                    dir="auto"
                />
                <h2>33% complete</h2>
            </div>
            <hr />
            <div className="tasks">
                <div className="actionCategory">
                    <h2>Today</h2>
                    {today.map((text) => (
                        <label class="container">
                            <input type="checkbox" checked="" />
                            <label htmlFor="checkbox">{text}</label>
                        </label>
                    ))}
                </div>

                <div className="actionCategory">
                    <h2>Yesterday</h2>
                    {yesterday.map((text) => (
                        <label class="container">
                            <input type="checkbox" checked="" />
                            <label htmlFor="checkbox">{text}</label>
                        </label>
                    ))}
                </div>

                <div className="actionCategory">
                    <h2>Last Week</h2>
                    {lastWeek.map((text) => (
                        <label class="container">
                            <input type="checkbox" checked="checked" />
                            <label htmlFor="checkbox">{text}</label>
                        </label>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Action
