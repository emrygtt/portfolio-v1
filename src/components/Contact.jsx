import { motion } from "framer-motion"

const Contact = () => {
    return (
        <motion.div className= 'contact'
        initial= {{opacity:0}} 
        animate= {{ opacity:1}}>
            <div className= 'contact-info'>
                <motion.p>
                Heyy, if you want to reach me you can email me <br/>
                at; <motion.p className= 'email' whileHover = {{scale: 1.1}}>emryigit97@gmail.com</motion.p><br/>
                I'll reply as soon as possible.<br/>
                Have a good day !!
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Contact
