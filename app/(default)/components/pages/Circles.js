"use vlient"
import Image from "next/image";
const Circles = () => {
    return (
        <div className="w-[200px] xl:w-[400px] absolute -right-16 -top-20
        mix-blend-color-dodge animate-pulse duration-500 z-10 opacity-10">
            <Image
                src="/img/moon.jpg"
                width={460}
                height={400}
                className="w-full h-full"
                alt=""
            />
        </div>
    )
}

export default Circles;