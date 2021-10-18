import { motion } from 'framer-motion'
import React from 'react'

const Resume = () => {
    return (
        <motion.div 
        className= 'infopage' 
        initial= {{opacity:0}} 
        animate= {{ opacity:1}}
        >
            <div className= 'resume-timeline'>
                <div className= 'content'>
                    <h4>2018</h4>
                    <h2>Bayer</h2>
                    <motion.h3 
                    className= 'title' 
                    whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                    >
                        Intern (IT)</motion.h3>
                </div>
                <div className="content">
                    <h4>2019</h4>
                    <h2>QNB eFinans</h2>
                    <motion.h3 
                    className= 'title' 
                    whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                    >
                        Long Term Internship (IT)
                    </motion.h3>
                </div>
                <div className="content">
                    <h4>2020</h4>
                    <h2>Cybersoft</h2>
                    <motion.h3 
                    className= 'title' 
                    whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                    >
                        Software Engineer
                    </motion.h3>
                </div>
                <div className="content">
                    <h4>2021</h4>
                    <h2>Magis Technology</h2>
                    <motion.h3 
                    className= 'title' 
                    whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                    >
                        Software Engineer
                    </motion.h3>
                </div>
            </div>
            <div className="skills">
                <div className="tl-item">
                        <div className="tl-bg">
                            
                        </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">FRAMEWORK</p>
                    </div>
                    <div className="tl-content">
                        <h3 className="f3 text--accent ttu">React.js</h3>
                        <h3 className="f3 text--accent ttu">Next.js</h3>
                        <h3 className="f3 text--accent ttu">React Native</h3>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg">
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">UI TOOLS</p>
                    </div>
                    <div className="tl-content">
                        <h3 className="f3 text--accent ttu">Material UI</h3>
                        <h3 className="f3 text--accent ttu">Framer Motion</h3>
                        <h3 className="f3 text--accent ttu">styled-components</h3>
                        <h3 className="f3 text--accent ttu">Ant Design</h3>
                    </div>
                </div>

                <div className="tl-item">
                    <div className="tl-bg">
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">BACKEND</p>
                    </div>
                    <div className="tl-content">
                        <h3 className="f3 text--accent ttu">GraphQL</h3>
                        <h3 className="f3 text--accent ttu">Hasura </h3>
                        <h3 className="f3 text--accent ttu">Apollo </h3>
                        <h3 className="f3 text--accent ttu">Golang </h3>
                    </div>
                </div>

                <div className="tl-item">
                    <div className="tl-bg">
                        
                    </div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">TEAM</p>
                    </div>
                    <div className="tl-content">
                        <h3 className="f3 text--accent ttu">Git</h3>
                        <h3 className="f3 text--accent ttu">Jira</h3>
                        <h3 className="f3 text--accent ttu">Figma</h3>
                        <h3 className="f3 text--accent ttu">Scrum</h3>
                    </div>
                </div>   
            </div> 
        </motion.div>
    )
}

export default Resume
