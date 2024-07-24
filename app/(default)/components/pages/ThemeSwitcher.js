"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    if(!mounted) {
        return null
    }
    return (
        <div>
            theme: {theme}
            <button onClick={() => setTheme("light")}>light</button>
            <button onClick={() => setTheme("dark")}>dark</button>
        </div>
    )
}

export default ThemeSwitcher;