import React, { useState } from 'react'
import * as bsIcons from "react-icons/bs";
import * as fcIcons from "react-icons/fc";
import * as slIcons from "react-icons/sl";


const menuItems = [
  {
    path: "/",
    title: "Home Page",
    icon: <fcIcons.FcHome />
  }, {
    path: "/data",
    title: "Data Page",
    icon: <bsIcons.BsDatabaseFillAdd />
  }, {
    path: "/setting",
    title: "Settings",
    icon: <slIcons.SlSettings />
  }]

const SideBar = () => {
  const [open, setOpen] = useState(true)
  return (
    <nav className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-60" : "w-20"} 
    relative duration-300`}>
      <bsIcons.BsArrowLeftCircleFill className={`text-light-white text-3xl 
      cursor-pointer absolute right-3 top-9 ${open && 'duration-1000 rotate-180'}`}
        onClick={() => setOpen(!open)} />
      <ul className=' text-white mt-10'>
        {menuItems.map((item, index) => (<>

          <li class="py-3 flex" key={index}>
            <span className='pr-3 pt-1'>{item.icon}</span>
            {open && <span>{item.title}</span>}
          </li>
        </>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar