import React from 'react'
import RightSvg from '../assets/RightSvg.svg'
import Zalij from '../assets/zalij.svg'
const Hero = () => {
  return (
    <div className="h-auto relative ">
    <div className='flex items-center justify-center gap-20 mt-[-2rem]'>
        <div className='left-side SlideAnimationRight w-[43rem] mb-'>
            <h1 className='text-mainBlue text-4xl  font-bold text-center '>Timing is Everything ,Master Your 
         Social Media Strategy</h1>
            <p className='text-Green text-center w-[30rem] text-2xl mt-3 ml-24'>Boost Visibility and Reach Your Audience 
            When it Matters Most</p>
        <div className="Buttons flex justify-center gap-4 mt-4">
            <button className="bg-blue-900 Box-Shadow py-1 px-16 h-16 rounded-tl-xl rounded-br-xl text-white">
              Discord    
            </button>
            <button className="bg-blue-900 Box-Shadow py-1 px-10 h-16 rounded-tl-xl rounded-br-xl text-white">
              Social media
            </button>
        </div>
        </div>
        <div className='SlideAnimationLeft'>
            <img src={RightSvg} alt="" />
        </div>
    </div>
    <div className='absolute  top-[415px] '>
        <img src={Zalij} alt=""/>
    </div>
    </div>
    
  )
}

export default Hero