import React from 'react'
import Header from './Header'
import Search from './Search'
import Contact from './contact'
import { chats } from './data'
const Sidebar = () => {
  return (
    <>
    <div className="col-3 " style={{height: '100vh'}}>
        
        <Header/>
        <Search/>
        {chats.map((item)=>{
          return <Contact {...item} />
        })}
        </div>
        </>
  )
}

export default Sidebar