import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";



const Header = () => {
  return (
    <>
    <div className="w-100 justify-content-between d-flex p-3 bg-white">
        <div className="left">
        <FaWhatsapp cursor='pointer' size={35} />
        </div>
        <div className="right gap-2 ">
            <RxUpdate cursor='pointer' size={35}/>
            <FaRegMessage cursor='pointer' size={35}/>
            <HiDotsVertical cursor='pointer' size={35} />
        </div>
    </div>
    
    </>
  )
}

export default Header