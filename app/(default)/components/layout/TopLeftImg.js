"use client"
import Image from "next/image"

 const TopLeftImg = () => {
    return (
        <div className={`image absolute -left-20 -top-10 mix-blend-lighten z-10 w-[200px] xl:w-[400px] opacity-50`}>
            <Image width={200} height={200} src="/img2/fire.jpg" />
        </div>
    )
}

export default TopLeftImg;