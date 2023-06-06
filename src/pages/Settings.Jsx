import React, { useContext } from 'react'
import { BsMoonStarsFill, BsSun } from 'react-icons/bs'
import { useTheme } from "../context"

const Settings = () => {

  const { dark, setDark } = useTheme()

  return (
    <div className='grid place-items-center w-full h-full'>
      <div className={`w-80 h-40  drop-shadow-xl flex rounded-lg p-4 ${dark ? "bg-neutral-400" : "bg-white"}`}>
        Change theme
        <div className='ml-8 mt-2 cursor-pointer text-lg' onClick={() => setDark(!dark)}  >
          {dark ? <BsMoonStarsFill /> : <BsSun />}
        </div>

      </div>
    </div>
  )
}

export default Settings