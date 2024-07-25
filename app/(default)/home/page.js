"use client"
import ParticlesContainer from "../components/pages/ParticlesContainer"
import {motion} from "framer-motion"
import { fadeIn } from "@/variants"

export default  () => {
    return (
        <div className="h-full relative text-purple-300">
            
            <div className="w-full h-full lg:bg-gradient-to-r from-purple-900 via-black/30 to-black/10">
                <motion.div 
                  variants={fadeIn("down", 0.1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden" 
                className="text-center h-screen flex flex-col justify-center xl:pt-40 xl:text-left xl:pl-40 container mx-auto">
                    <motion.h1 
                        className="h1 "
                        variants={fadeIn("down", 0.2)}  
                        initial="hidden" 
                        animate="show" 
                        exit='hidden'
                    >
                        Freelancer<br/> <span className="text-blue-300">Frontend</span> <br/> Developer
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn("down", 0.3)}  
                        initial="hidden" 
                        animate="show" 
                        exit='hidden'
                        className="max-s-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
                        Website, Mobile app, UX UI
                    </motion.p>

                </motion.div>
            </div>

            <div className="w-full h-full absolute right-0 bottom-0 ">
                <ParticlesContainer/>
            </div>
        </div>
    )
}