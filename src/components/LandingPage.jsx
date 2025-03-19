
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()

  const[action, setAction] = useState();
  return (
    <>
    <div className="relative bg-gray-800 p-6 md:p-10 lg:p-20 flex flex-col items-center justify-center min-h-screen">
    <div className="text-6xl font-bold text-center items-center content-center m-5 p-5 text-white">Welcome to the Smart Education System
    </div>
      <div className=' text-center font-bold text-4xl items-center content-center m-4 p-6 text-whitr'>
        Where the future of every child is Shaped
      </div>
      <div className="items-center content-center text-blue-600 text-2xl font-bold m-4 p-6">
        Sign up te access the System
        
      </div>
      <div className="flex">
        <div className="items-center content-center text-blue-700 font-bold text-2xl m-b-6 p-5">Teachers Sign Up</div>
      <div className="items-center content-center w-auto h-auto">
        <button className='flex text-white bg-blue-700 m-8 p-5 rounded-full cursor-pointer hover:bg-blue-400' onClick={()=>{
          navigate('/loginPage')
        }}>Continue to Sign Up</button>
      </div>
        <div className="items-center content-center text-blue-700 font-bold text-2xl m-b-6 p-5">Parent Sign Up</div>
      <div className="items-center content-center w-auto h-auto">
        <button className='flex text-white bg-blue-700 m-8 p-5 rounded-full cursor-pointer hover:bg-blue-400' onClick={()=>{
          navigate('/loginPage')
        }}>Continue to Sign Up</button>
      </div>
        <div className="items-center content-center text-blue-700 font-bold text-2xl m-b-6 p-5">Student Sign Up</div>
      <div className="items-center content-center w-auto h-auto">
        <button className='flex text-white bg-blue-700 m-8 p-5 rounded-full cursor-pointer hover:bg-blue-400' onClick={()=>{
          navigate('/loginPage')
        }}>Continue to Sign Up</button>
      </div>
      </div>
      </div>
    </>
  )
}

export default LandingPage