import React, { useState } from 'react'
import close from '../assets/closeBlack.svg'

const LoginModal = ({ setModal }) => {

    const [isLogin, setLogin] = useState(true)

    return (
        <div>



            <div className='bg-[#0000008b] w-[100vw] h-[100vh] fixed top-0 left-0'>

                <div className="bg-white rounded-[8px] w-[400px] relative top-[200px] left-[35%] p-[40px]">

                    <img className='absolute top-5 right-5 cursor-pointer' onClick={() => setModal(false)} src={close} alt="" />

                    {
                        isLogin ?
                            <div className='login'>
                                <p className='font-bold text-center text-[24px]'>Login</p>

                                <div className='flex flex-col gap-[25px] pt-[20px]'>

                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px] outline-[#353535] w-full' placeholder='Email' type="email" />
                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px]  outline-[#353535] w-full' placeholder='Password' type="password" />

                                </div>

                                <p className='text-[13px]'>No account? <span onClick={() => setLogin(false)} className='font-medium cursor-pointer'>Register</span></p>

                                <button className='bg-black text-white w-full p-[10px] rounded-[8px] mt-[20px]'>Login</button>

                            </div>

                            : <div className='register'>

                                <p className='font-bold text-center text-[24px]'>Register</p>

                                <div className='flex flex-col gap-[25px] pt-[20px]'>

                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px]  outline-[#353535] w-full' placeholder='Email' type="email" />
                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px]  outline-[#353535] w-full' placeholder='Password' type="password" />

                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px]  outline-[#353535] w-full' placeholder='firstName' type="text" />
                                    <input className='border-[#adadad] border-[1px] rounded-[8px] p-[10px]  outline-[#353535] w-full' placeholder='lastName' type="text" />

                                </div>

                                <p className='text-[13px]'>
                                    have an account? <span className='font-medium cursor-pointer' onClick={() => setLogin(true)}>Login</span></p>

                                <button className='bg-black text-white w-full p-[10px] rounded-[8px] mt-[20px]'>Register</button>

                            </div>
                    }


                </div>

            </div>



        </div>
    )
}

export default LoginModal