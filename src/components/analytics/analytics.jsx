import React from 'react'
import './analytics.css'
import { motion } from 'framer-motion'

function analytics() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="analytics"
        >
            <div className="cardAnalytics">
                <div className="headerCard">
                    <h2>Daily Production</h2>
                    <p>90%</p>
                </div>
                <h3>Chart goes here</h3>
            </div>
            <div className="cardAnalytics">
                <div className="headerCard">
                    <h2>Price Forecast</h2>
                    <p>16%</p>
                </div>
                <h3>Chart goes here</h3>
            </div>
            <div className="cardAnalytics">
                <div className="headerCard">
                    <h2>Crops Monitoring</h2>
                </div>
                <h3>Chart goes here</h3>
            </div>
        </motion.div>
    )
}

export default analytics
