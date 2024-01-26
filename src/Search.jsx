import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
    <div className="d-flex align-items-center border mx-auto rounded-1"style={{width:'96%'}}><span></span><CiSearch size={30}/>
    <input type="Search" placeholder='Search or start a new chat'className="form-control my-2 bg-transparent p-0 border-0" />
    </div>


    
    </>
  )
}

export default Search