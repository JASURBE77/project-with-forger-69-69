import React from 'react'
import Iphone from '../assets/Iphoneimage.png'
const Banner = () => {
  return (
    <div>
        <div className="bg-[linear-gradient(90.7deg,#211C24_0.64%,#211C24_101%)] ...">
           <div className='container'>
             <div className='flex items-center justify-between  max-[500px]:py-5'>
                <div className='flex flex-col gap-2.5 '>
                    <span className='text-[#FFFFFF] font-semibold text-2xl  max-[500px]:text-[16px] max-[535px]:text-[18px]'>Pro.Beyond.</span>
                    <h1 className='text-7xl font-light max-[1000px]:text-6xl  text-white max-[500px]:text-2xl max-[785px]:text-4xl'>IPhone 14 <span className='font-bold'>Pro</span></h1>
                    <p className='font-medium text-[18px] text-[#909090] max-[785px]:max-w-[350px]  max-[500px]:max-w-[230px]  w-full max-[535px]:text-[14px]'>Created to change everything for the better. For everyone</p>
                    <button className='btn max-[535px]:text-[14px] bg-transparent text-white border-white hover:bg-white w-fit hover:text-black  max-[500px]:text-[12px]'>Shon now</button>
                </div>
                <img className='max-[1000px]:w-[300px] max-w-[468px]   max-[785px]:w-[210px]  max-[500px]:w-[100px] max-[535px]:w-[170px]  max-[500px]:relative bottom-0' src={Iphone} alt="" />
            </div>
           </div>
         </div>

    </div>
  )
}

export default Banner