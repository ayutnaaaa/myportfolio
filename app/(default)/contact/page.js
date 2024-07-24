"use client"
import Circles from "../components/pages/Circles"
import {BsArrowRight} from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useState, useContext } from "react";
import { DataContext } from "@/context/data";
import Link from "next/link";
import Image from "next/image";

export default  () => {
    const ctx = useContext(DataContext);
    const [data, setData] = useState({
      name: "",
      company: "",
      email: "",
      phone: "",
      desc: "",
    });
    // console.log(data)
    const send = () => {
        if (
          data.name == "" ||
          data.email == "" ||
          data.phone == "" ||
          data.desc == ""
        ) {
          alert("Мэдээллээ гүйцэт бичнэ үү");
        } else {
          ctx.userData(data);
          alert("Амжилттай илгээгдлээ")
        }
      };
      const handle = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    return (
        <div className="text-white bg-primary/30 py-10 flex items-center justify-center text-center xl:text-left">
           
                <div className="m-auto flex flex-col max-w-[700px] ">
                    <h2 className="sm:h2 text-center mt-2 sm:mt-0 mb-6">
                        Let's <span className="text-purple-300">connect.</span>
                    </h2>
                    <form className="flex-1 flex flex-col gap-2 w-full mx-auto">
                        <div className="flex gap-x-6 w-full">
                            <input 
                                label="Name"
                                name="name"
                                type="text" 
                                placeholder="name" 
                                className="input"
                                onChange={handle}
                            />
                
                        </div>
                        <input 
                            type="text" 
                            label="Company name"
                            placeholder="Company name" 
                            name="company"
                            onChange={handle}
                            className="input"
                        />
                        <input 
                            type="text" 
                            label="Phone"
                            placeholder="Phone" 
                            name="phone"
                            onChange={handle}
                            className="input"
                        />
                          <input 
                            type="text" 
                            label="Email"
                            placeholder="Email" 
                            name="email"
                            onChange={handle}
                            className="input"
                        />
                        <textarea 
                           label="Desc"
                             name="desc"
                             onChange={handle}
                            placeholder="message" 
                            className="textarea">
                            
                        </textarea>
                        <button
                        onClick={send} 
                            className="btn rounded-full border border-white/50 max-w-[170px]
                            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-blue-500 group">
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Send</span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
                            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
                        </button>
                    </form>
                </div>
           
        </div>
    )
}