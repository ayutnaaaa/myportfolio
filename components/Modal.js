"use client"
import {useState} from "react";
import { Dialog } from "@headlessui/react";

const Modal = () => {
    let [isOpen, setIsOpen] = useState(true)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
// 3:30  https://www.youtube.com/watch?v=lh9XVGv6BHs&t=1867s
    return (
        <>
        <button type="button" onClick={openModal}>
            ttt
        </button>
        </>
    )
}