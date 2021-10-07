import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
function Home() {
    return (
        <motion.div
            className="itemContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home"
        >
            <h1>Map</h1>
        </motion.div>
    )
}

export default Home
