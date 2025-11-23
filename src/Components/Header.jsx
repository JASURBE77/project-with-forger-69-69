import React, { useState } from 'react'
import logo from '../assets/Logo Vector.svg'
import heart from '../assets/heart.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'
import lupa from '../assets/lupa.svg'
import burger from '../assets/burger-menu-svgrepo-com.svg'
import close from '../assets/close-x-svgrepo-com.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const [isBurger, setBurger] = useState(false)

    return (
        <div>

            <header className='bg-white py-[20px]'>

                <div className="container max-w-full w-[85%] mx-auto">

                    <div className='flex items-center justify-between'>

                        <img onClick={() => setBurger(true)} className='flex lg:hidden w-[30px]' src={burger} alt="" />

                        <img src={logo} alt="" />

                        <div className='flex relative'>
                            <img className='absolute w-[19px] top-[20px] left-[20px]' src={lupa} alt="" />
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
                            <img className='cursor-pointer' src={heart} alt="" />
                            <img className='cursor-pointer' src={cart} alt="" />
                            <img className='cursor-pointer' src={user} alt="" />
                        </div>

                    </div>

                </div>

                {isBurger &&

                    <div className='w-[100vw] h-[100vh] bg-[#0000007c] fixed top-0 left-0'>

                        <div className='bg-[#211C24] w-[40%] p-[30px] h-[100vh] relative'>

                            <img onClick={() => setBurger(false)} className='absolute top-5 right-10' src={close} alt="" />

                            <ul className='flex flex-col gap-[20px] items-start '>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/">Home</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/About">About</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Contact">Contact Us</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "text-black" : "text-[#c7c7c7] hover:text-[#929292] transition-all"} to="/Blog">Blog</NavLink></li>
                            </ul>
                        </div>

                    </div>

                }

            </header>

        </div>
    )
}

export default Header