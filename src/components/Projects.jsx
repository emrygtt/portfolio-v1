import { motion } from 'framer-motion'
import React from 'react'

const Projects = () => {
    return (
        <motion.div 
        className= 'projects'
        initial = {{ x: -1000, y: -1000, color: '#000'}}
        animate = {{ x: 450, y:350, color: '#fff'}}
        >
            LOADING...
            
        </motion.div>
    )
}

export default Projects
