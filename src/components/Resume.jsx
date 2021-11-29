import { motion } from 'framer-motion'
import React from 'react'


const Resume = () => {
    return (
    <div className= 'resume'>
        <div className = 'resume-jobs'>
            <div className= 'resume-jobs-content'>
                <h4>2018</h4>
                <h2>Bayer</h2>
                <motion.h3 
                className= 'title' 
                whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                >
                    Intern (IT)</motion.h3>
            </div>
            <div className="resume-jobs-content">
                <h4>2019</h4>
                <h2>QNB eFinans</h2>
                <motion.h3 
                className= 'title' 
                whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                >
                    Long Term Internship (IT)
                </motion.h3>
            </div>
            <div className="resume-jobs-content">
                <h4>2020</h4>
                <h2>Cybersoft</h2>
                <motion.h3 
                className= 'title' 
                whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                >
                    Software Engineer
                </motion.h3>
            </div>
            <div className="resume-jobs-content">
                <h4>2021</h4>
                <h2>Magis Technology</h2>
                <motion.h3 
                className= 'title' 
                whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                >
                    Software Engineer
                </motion.h3>
            </div>
            <div className="resume-jobs-content">
                <h4>2021</h4>
                <h2>IUGO Technology</h2>
                <motion.h3 
                className= 'title' 
                whileHover= {{ color:"#9AA0A8", scale: 1.1}}
                >
                    Software Developer
                </motion.h3>
            </div>
        </div>
        <div className= 'resume-skills'>
            <div className= 'container-FrontEnd'>
                <div className = 'container-FrontEnd-card'>
                    <div className= 'container-FrontEnd-card-contentBx'>
                        <h2> Technologies </h2>
                        <div className ='container-FrontEnd-card-contentBx-technologies-content'>
                            <span>React.js</span>
                            <span>Next.js</span>
                            <span>Javascript/Html/CSS</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className= 'container-UITools'>
                <div className = 'container-UITools-card'>
                    <div className= 'container-UITools-card-contentBx'>
                        <h2> UI Tools </h2>
                        <div className ='container-UITools-card-contentBx-technologies-content'>
                            <span>Material UI</span>
                            <span>Framer-Motion</span>
                            <span>Styled-Components</span>

                        </div>

                    </div>
                </div>
            </div>
            <div className= 'container-BackEnd'>
                <div className = 'container-BackEnd-card'>
                    <div className= 'container-BackEnd-card-contentBx'>
                        <h2> BackEnd </h2>
                        <div className ='container-BackEnd-card-contentBx-technologies-content'>
                            <span>Python</span>
                            <span>Java</span>
                            <span>Golang</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className= 'container-Team'>
                <div className = 'container-Team-card'>
                    <div className= 'container-Team-card-contentBx'>
                        <h2> TeamWork </h2>
                        <div className ='container-Team-card-contentBx-technologies-content'>
                            <span>Git/GitKraken/SourceTree</span>
                            <span>Jira</span>
                            <span>Figma</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resume
