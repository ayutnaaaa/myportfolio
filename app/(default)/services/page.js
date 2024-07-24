"use client"

import Bulb from "../components/pages/Bulb"
import Circles from "../components/pages/Circles"
import ServiceSlider from "../components/pages/ServiceSlider"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"


export default  () => {
    

    return (
        <div className="text-white h-full bg-primary/30 py-36 flex items-center">
            <Bulb/>
            <div className="p-6 lg:px-40 w-full mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8 ">
                 
                    <div className="text-center flex xl:w-[30vw] flex-col  mb-4 xl:mb-0">
                        <motion.h2 
                         variants={fadeIn("up", 0.2)}  
                         initial="hidden" 
                         animate="show" 
                         exit='hidden'
                        className="h2 xl:mt-8">
                            МАНАЙ ҮЙЛЧИЛГЭЭ <span className="text-purple-300"></span>
                        </motion.h2>
                        <motion.p 
                          variants={fadeIn("up", 0.4)}  
                          initial="hidden" 
                          animate="show" 
                          exit='hidden'
                        className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                        </motion.p>
                    </div>
                    <motion.div 
                            variants={fadeIn("down", 0.6)}  
                            initial="hidden" 
                            animate="show" 
                            exit='hidden'
                            className="w-full xl:max-w-[65%]">
                        <ServiceSlider/>
                    </motion.div>
                   
                   
                </div>
            </div>
            <Circles/>
          
        </div>
    )
}