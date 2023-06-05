import React, { useState } from 'react'
import * as bsIcons from "react-icons/bs";
import * as fcIcons from "react-icons/fc";
import * as slIcons from "react-icons/sl";
import { Link } from 'react-router-dom';


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
      <ul className='text-stone-200 mt-10'>
        {menuItems.map((item, index) => (
          <li className="py-3 flex hover:bg-gray-200 hover:rounded hover:duration-300 hover:text-gray-800" key={index}>
            <Link to={item.path}>
              <span className='pr-3 pt-1 ml-1'>{item.icon}</span>
              <span className={`duration-500 ${!open && 'hidden'}`}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideBar