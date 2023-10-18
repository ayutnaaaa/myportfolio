"use client"
import { FormEvent, useState } from "react";

// https://www.youtube.com/watch?v=lh9XVGv6BHs&t=1867s  1:00
export default () => {
    const [searchPrompt, setSearchPrompt] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {   
        event.preventDefault();
    }
    return(
        <form 
        className="flex flex-wrap gap-4 mt-12"
        onSubmit={handleSubmit}
        >

        </form>
    )
}