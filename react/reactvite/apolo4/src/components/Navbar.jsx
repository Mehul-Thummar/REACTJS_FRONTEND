import React from 'react'
import { SlHandbag, SlUser } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    return (
        <div>
            <div className='container '>
                <div className='w-screen'>
                    {/* ------------------- Nav bar ------------------- */}
                    <div className='flex justify-between items-center px-6 h-20 bg-gradient-to-r from-[#6cea32] via-[#d5496054] to-[#FCEE21]'>
                        <div className='flex items-center '>
                            <NavLink to="/">
                                <img className='h-6 pr-4 ' src="" alt="" />
                            </NavLink>
                        </div>
                        <div className='flex justify-center items-center'>
                            <ul className='flex justify-center items-center'>
                                <li><NavLink className='px-5 text-xl font-bold hover:text-white' to="/">Home<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5 text-xl font-bold hover:text-white' to="/Shop">Axios<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5 text-xl font-bold hover:text-white' to="/Page">Page<i class="fa-solid fa-angle-down"></i></NavLink></li>
                                <li><NavLink className='px-5 text-xl font-bold hover:text-white' to="/Blog">Blog<i class="fa-solid fa-angle-down"></i></NavLink></li>
                            </ul>
                            <div className='flex items-end px-5 hover:text-white'>
                                <NavLink className='text-xl font-bold' to="/Contact">Contact</NavLink>
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <SlUser className='hover:text-white size-6 mx-2' />
                            <p className=' mx-1 text-xl font-bold hover:text-white'>Login /</p>
                            <p className=' mr-1 text-xl font-bold hover:text-white'>Register</p>
                            {/* <p className=' mx-5 hover:text-[#ba933e]'>|</p>
                            <div className='flex justify-center items-center'>
                                <CiHeart className='hover:text-[#ba933e] size-6 mx-3 ' />
                                <SlHandbag className='hover:text-[#ba933e] size-5 mx-3' />
                                <IoSearchOutline className='hover:text-[#ba933e] size-6 mx-3' />
                            </div> */}
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Navbar
