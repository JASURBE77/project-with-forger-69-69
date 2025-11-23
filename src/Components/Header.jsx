import React, { useState } from 'react'
import Logo from '../assets/LogoVector.svg'
import Heart from '../assets/Heart.svg'
import Cart from '../assets/Cart.svg'
import User from '../assets/User.svg'
import Lupa from '../assets/Lupa.svg'
import Burger from '../assets/Burger-menu-svgrepo-com.svg'
import Close from '../assets/Close-x-svgrepo-com.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const [isBurger, setBurger] = useState(false)

    return (
        <div>

            <header className='bg-white py-[20px]'>

                <div className="container">

                    <div className='flex items-center justify-between mb-5'>

                    <div className='flex items-center gap-5'>
                            <img onClick={() => setBurger(true)} className='flex lg:hidden w-[30px]' src={Burger} alt="" />

                        <img src={Logo} alt="" />
                    </div>

                        <div className='flex relative max-[768px]:hidden'>
                            <img className='relative w-[19px] left-[40px]' src={Lupa} alt="" />
                            <input placeholder='Search' className='bg-[#F5F5F5] rounded-[8px] w-[372px] h-[56px] text-black pl-[48px] outline-none' type="text" />
                        </div>

                        <nav className=''>
                            <ul className='hidden lg:flex items-center gap-[30px]'>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/">Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/About">About</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Contact">Contact Us</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Blog">Blog</NavLink></li>
                            </ul>
                        </nav>

                        <div className='flex items-center gap-[27px]'>
                            <img className='cursor-pointer' src={Heart} alt="" />
                            <img className='cursor-pointer' src={Cart} alt="" />
                            <img className='cursor-pointer' src={User} alt="" />
                        </div>

                    </div>

                </div>

                {isBurger &&

                    <div className='w-[100vw] h-[100vh] bg-[#0000007c] fixed top-0 z-999 left-0'>

                        <div className='bg-black w-[65%] p-[30px] h-[100vh] relative'>

                            <img onClick={() => setBurger(false)} className='absolute top-5 right-10' src={Close} alt="" />

                            <ul className='flex flex-col gap-[20px] items-start '>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/">Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/About">About</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Contact">Contact Us</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Blog">Blog</NavLink></li>
                            </ul>
                        </div>

                    </div>

                }
                   <div className="container">
                         <div className='  max-[768px]:flex hidden justify-center'>
                            <img className='relative w-[19px] left-[30px]' src={Lupa} alt="" />
                            <input placeholder='Search' className='bg-[#F5F5F5] rounded-[8px] w-full h-[56px] text-black pl-[48px] outline-none' type="text" />
                        </div>
                   </div>

            </header>

        </div>
    )
}

export default Header