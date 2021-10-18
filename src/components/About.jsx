import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const About = () => {
    return (
        <div className= 'about'>
            <div className= 'titles'>
                <div className= 'about-logo'>
                    <motion.h2 
                    initial = {{ x: -1000, y: 0, color: '#000'}}
                    animate = {{ x: -50, y:0, color: '#fff'}}
                    
                    >
                        emrygtt
                    </motion.h2>
                </div>
                <div className = 'about-me'>
                    <motion.h2 
                    initial = {{ x: 1000, y: 0, color: '#000'}}
                    animate = {{ x: 200, y:-315, color: '#fff'}}
                    >
                        Hello, I'm Emre YIGIT.<br/>
                        Software Engineer/Developer
                        <br/>
                        <br/>
                        <br/>
                        <motion.h5
                        initial= {{x:19999, y: -199999}}
                        animate= {{x:300, y:100}}
                        >Try, fail, learn, repeat !</motion.h5> 
                    </motion.h2>
                </div>
                <motion.div 
                className= 'icons'
                initial= {{x:0, y:-10000}}
                animate= {{x:-10, y: -600}}
                >
                    <SocialIcon className = 'icons-github'      url= 'https://github.com/emrygtt'               target= '_blank'/>
                    <SocialIcon className = 'icons-linkedin'    url= 'https://www.linkedin.com/in/emrygtt/'    target= '_blank'/>
                    <SocialIcon className = 'icons-instagram'   url= 'https://www.instagram.com/emrygtt/'       target= '_blank'/>
                </motion.div>
            </div>

        </div>
    )
}

export default About
