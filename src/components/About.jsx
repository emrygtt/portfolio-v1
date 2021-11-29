import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (

        <motion.div 
        className = 'about' 
        initial= {{opacity:0}} 
        animate= {{ opacity:1}}
        >
            <div className = 'about-top'>
                <div className = 'about-top-left'>
                    <div className = 'about-top-left-up'>
                        <div className = 'emrygtt'>
                        emrygtt 
                        </div>
                    </div>
                    <div className = 'about-top-left-down'>
                        <div className= 'social-icons'>
                            <SocialIcon className = 'icons-github'      url= 'https://github.com/emrygtt'               target= '_blank'/>
                            <SocialIcon className = 'icons-linkedin'    url= 'https://www.linkedin.com/in/emrygtt/'    target= '_blank'/>
                            <SocialIcon className = 'icons-instagram'   url= 'https://www.instagram.com/emrygtt/'       target= '_blank'/>
                        </div>
                    </div>
                </div>
                <div className = 'about-top-right'>
                    <div className= 'about-top-right-center'>
                        <p>
                        Hello, I'm Emre YIGIT.<br/>
                        Software Engineer/Developer
                        </p>
                    </div>
                </div>
            </div>
            <div className = 'about-bottom'>
                <div className = 'footer'>
                    <span> Try, fail, learn, repeat !</span>
                </div>
            </div>
        </motion.div>
    )
}

export default About
