import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div>
            <div className= 'contact'>
                <motion.p>
                Heyy, if you want to reach me you can email me <br/>
                at; <motion.p className= 'email' whileHover = {{scale: 1.1}}>emryigit97@gmail.com</motion.p><br/>
                I'll reply as soon as possible.<br/>
                Have a good day !!
                </motion.p>
            </div>
        </div>
    )
}

export default Contact
