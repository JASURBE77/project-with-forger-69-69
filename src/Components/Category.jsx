import React from 'react'
import { Smartphone, Camera, Headphones, Gamepad2 } from 'lucide-react'
import { BsSmartwatch } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const Category = () => {
  return (
    <div className='mb-10'>
        <div className='container'>
            <div className='flex justify-center   gap-5  mt-20 flex-wrap'>
                <div className='bg-[#EDEDED] max-[850px]:w-[120px] max-[850px]:h-[90px] w-[140px] h-[128px]  flex flex-col items-center justify-center rounded-2xl gap-2'>
                    <Smartphone />
                    <span>Phones</span>
                </div>
                   <div className='bg-[#EDEDED]  max-[850px]:w-[120px] max-[850px]:h-[90px]  w-[140px] h-[128px] flex flex-col items-center justify-center rounded-2xl gap-2'>
                    <BsSmartwatch />
                    <span>Smart Watches</span>
                </div>
                   <div className='bg-[#EDEDED]  max-[850px]:w-[120px] max-[850px]:h-[90px]  w-[140px] h-[128px] flex flex-col items-center justify-center rounded-2xl gap-2'>
                   <Camera />
                    <span>Cameras</span>
                </div>
                   <div className='bg-[#EDEDED]  max-[850px]:w-[120px] max-[850px]:h-[90px]  w-[140px] h-[128px] flex flex-col items-center justify-center rounded-2xl gap-2'>
                    <Headphones />
                    <span>Headphones</span>
                </div>
                   <div className='bg-[#EDEDED]  max-[850px]:w-[120px] max-[850px]:h-[90px]  w-[140px] h-[128px] flex flex-col items-center justify-center rounded-2xl gap-2'>
                    <RiComputerLine />
                    <span>Computers</span>
                </div>
                   <div className='bg-[#EDEDED]  max-[850px]:w-[120px] max-[850px]:h-[90px]  w-[140px] h-[128px] flex flex-col items-center justify-center rounded-2xl gap-2'>
                    <Gamepad2 />
                    <span>Gaming</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category     