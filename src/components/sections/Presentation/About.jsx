import React from 'react'
import ButtonBlue from '../../utils/buttons/button_blue'
import Image from '../../../assets/imagePresent.png'

const About = () => {
  return (
    <div className=' container mx-auto border border-red-400'>
        <div className='flex flex-col sm:flex-row'>
            <div className=" border border-green-400 p-4 m-2  w-full sm:w-1/2">
                <div className='flex flex-col'>
                    <div className="hidden sm:block text-blackUi font-bold uppercase p-4 my-2 ">About company</div>
                    <div className=" text-blackUi text-t48 font-bold uppercase p-4 my-2 ">About us</div>
                    <p className="text-t16 text-grayUi  p-4 my-2">
                            We know how large objects will act, 
                            but things on a small scale
                    </p>
                    <div className=" my-2 w-[193px]">
                        <ButtonBlue title="Get Quote Now"/>
                    </div>
                </div>
            </div>

        <div className='relative border border-blue-600 w-full sm:w-1/2'>
                <img src={Image} alt="Image" className='z-20 relative  ' />
                {/* Cercle */}
                <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[415px] h-[415px] rounded-full bg-pinkUi  z-10 "></div>
                

        </div>

        </div>
       
    
    </div>
  )
}

export default About