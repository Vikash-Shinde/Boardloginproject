import React from 'react'
import sytles from '../Layout/gridlayout.css';
import { BiMoney, BiUserCircle } from 'react-icons/bi';
import { BsTags, BsBell } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlineDashboard, AiOutlineSetting, AiOutlineSchedule } from 'react-icons/ai';
import Chartapex from './Chartapex';
import Pichart from './Pichart';

export default function Dashgrid() {
    return (
        <div className=' grid-container bg-gray-100 w-screen h-screen'>

            {/* Side bar container  */}
            <div className='sidebar-container bg-black h-full text-white rounded-2xl mt-5 ms-10 p-5'>
                {/* Head-box */}
                <div className='title-box text-4xl font-bold'>
                    <h1 className=' ps-5 ms-10 mt-5'>Board.</h1></div>

                {/* Menu box list */}
                <div className="menu-box mt-6">
                    <ul className=''>
                        <li className='p-3 flex flex-row'> <AiOutlineDashboard size={20} /><a href="#" className='ps-3 active'>Dashboard</a></li>
                        <li className='p-3 flex flex-row'> <BsTags size={20} /><a href="#" className='ps-3'>Transactions</a></li>
                        <li className='p-3 flex flex-row'> <AiOutlineSchedule size={20} /><a href="#" className='ps-3'>Schedules</a></li>
                        <li className='p-3 flex flex-row'> <BiUserCircle size={20} /><a href="#" className='ps-3'>User</a></li>
                        <li className='p-3 flex flex-row'> <AiOutlineSetting size={20} /><a href="#" className='ps-3'>Settings</a></li>

                    </ul>
                </div>

                {/* menu footier */}
                <div className='menu-footer p-5'>
                    <h3><a href="#">contact us</a></h3>
                    <h3><a href="#">Help</a></h3>
                </div>

            </div>

            {/* Main-container */}
            <div className=" main-container  mx-5 text-black">
                <div className='main-header text-black pt-5 pb-3'>
                    <h1 className='text-3xl font-bold '>Dashbord</h1>
                    <div className='search-box'>
                        <form className="max-w-sm px-4 float-left">
                            <div className="relative">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full py-1  text-gray-500 border-none rounded-2xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                                />
                            </div>
                        </form>
                        <span className='float-left mx-2'><a href="#"><BsBell size={25} /> </a></span>
                        <span className='float-left mx-2'><a href="#"><FaUserCircle size={25} /></a></span>
                    </div>

                </div>
                <div className='dashboard-container  text-black'>
                    <div className="bg-[#DDEFE0] rounded-xl p-3 text-lg">
                        <div className='flex justify-end'> <span  ><BiMoney size={30} /></span> </div>
                        <h3>Total Revenue</h3>
                        <h4>$2,129,430</h4>
                    </div>
                    <div className="bg-[#F4ECDD] rounded-xl p-3">
                        <div className='flex justify-end'> <span  ><BsTags size={30} /></span> </div>
                        <h3>Total Transactions</h3>
                        <h4>1,520</h4>
                    </div>
                    <div className="bg-[#EFDADA] rounded-xl p-3">
                        <div className='flex justify-end'> <span  ><FiThumbsUp size={30} /></span> </div>
                        <h3>Total Likes</h3>
                        <h4>1,520</h4>
                    </div>
                    <div className="bg-[#DEE0EF] rounded-xl p-3">
                        <div className='flex justify-end'> <span  ><FiUsers size={30} /></span> </div>
                        <h3>Total Users</h3>
                        <h4>890</h4>
                    </div>

                    {/* chart box */}
                    <div className='chart-box bg-white rounded-xl p-4 w-full h-max'><Chartapex /></div>

                    <div className='bottom-box1 bg-white h-full rounded-2xl p-4'>
                        <div className='flex justify-between'>
                            <h3 className=''>Top products</h3>

                            <button id="dropdownHover" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center font-light" type="button">May-june 2021 <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className='flex justify-start pt-8'><Pichart />
                        </div>
                    </div>

                    <div className='bottom-box2 bg-white rounded-2xl p-4' >
                        <div className='flex justify-between'>
                            <h3 > Todays</h3>
                            <p className='float-right'>See All <span className='float-right'><MdArrowForwardIos /> </span></p>
                        </div>
                        <div className='border-l-8 border-[#9BDD7C] mt-5'>
                            <h6 className='font-normal ps-2'>Meeting with suppliers from Kuta Bali</h6>
                            <p className='font-extralight ps-2'>14.00-15.00</p>
                            <p className='font-extralight ps-2'>at Sunset Road, Kuta, Bali </p>
                        </div>
                        <div className='border-l-8 border-[#6972C3] mt-5'>
                            <h6 className='ps-2'>Meeting with suppliers from Kuta Bali</h6>
                            <p className='font-extrathin ps-2'>14.00-15.00</p>
                            <p className='font-extralight ps-2'>at Sunset Road, Kuta, Bali </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
