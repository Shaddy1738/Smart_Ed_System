import React from 'react'

const Header = ({title, subtittle}) => {
 
  return (

    <div className='flex content-end bg-gray-700 p-6 mb-7'>
        <div className="font-bold text-white">{title}</div>
        <div className="flex content-end items-end">
        <img src="" alt="user-logo" />
        <img src="" alt="settings-logo" />
        <img src="" alt="notification-logo" />
        </div>

    </div>
  )
}

export default Header