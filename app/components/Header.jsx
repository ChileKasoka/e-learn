"use client"

import React, { useState } from 'react';
import Link from "next/link";
import {FaSearch, FaRegMap, FaTwitter, FaFacebook} from "react-icons/fa";
import {BsSun, BsFillPersonFill, BsSearch} from "react-icons/bs"
import {BiWorld} from "react-icons/bi"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    const headerlinks = [
        { id: 1, text: "Tutorial Map", href: "/tutorial-map", icon: <FaRegMap className='h-6 w-6 text-[#696e79]'/> }
    ]

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleSearch = () => {
        setSearch(!search);
      };
  return (
    <div>
        <div className='grid grid-cols-1 sm:flex justify-between h-auto w-full flex-wrap items-center border-b-4 border-[#e9e6e4] dark:border-[#35383f]'>
            <div className='flex justify-between w-full items-center h-16'>
            <div className='flex ml-3 items-center'>
                {/* mobile button */}
                <div
                    onClick={toggleMenu}
                    className="left-0 hover:text-[#9197a3] text-[#696e79] sm:hidden z-10"
                >
                    {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
                {/* header icons                 */}
                <div className='hidden sm:flex items-center text-[#696e79] border-r-2 h-16 pr-5 pt-2 hover:text-[#e3796a] hover:cursor-pointer border-[#e9e6e4] dark:border-[#35383f]'>
                    <BiWorld className='h-6 w-6'/>
                    EN
                </div>
                <div className='ml-10 hover:cursor-pointer'>
                    JAVASCRIPT.INFO
                </div>
            </div>

            {/* tenary search operator */}
            {search ?
                <div
                className={`w-64 my-4 rounded-md transition-all mr-2 ${
                    search ? 'block' : 'hidden'
                }`}
                style={{
                    maxHeight: search ? '100px' : '0',
                    opacity: search ? 1 : 0,
                    visibility: search ? 'visible' : 'hidden',
                }}
                >
                <input
                type="text"
                placeholder="Search..."
                className="w-full transition-all duration-600 opacity-100 border border-gray-300 dark:bg-[#232529] p-2 text-white focus:outline-none"
                onBlur={handleSearch}
                autoFocus
                />
            </div> :
            <div className='flex space-x-5 mr-5'>
                <div className='border border-r-3 dark:border-[#4c2623] border-[#e3796a] hover:border-[#e39388] dark:hover:border-[#e3796a] rounded-full text-[#c4433a] dark:text-[#e3796a] p-1 px-2 hover:cursor-pointer'>Buy EPUB/PDF</div>
                <BsFillPersonFill className='h-6 w-6 text-[#696e79] mt-1 items-center hover:text-[#9197a3] hover:cursor-pointer'/>
                <div className='hidden sm:flex space-x-5 items-center text-[#696e79]'>
                    {/* <BsSun className='h-6 w-6 hover:text-[#9197a3] hover:cursor-pointer'/> */}
                    <DarkModeSwitch />
                    <div className='relative'>
                        <div onClick={handleSearch} className="">
                            <BsSearch className='h-6 w-6 hover:text-[#9197a3] hover:cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>}
            </div>
            {/* mobile menu */}
            <div className={`sm:flex sm:items-center ${menu ? 'block' : 'hidden'}`}>
                <div>
                {/* Add the search bar here */}
                <div className=" flex bg-[#f7f4f3] dark:bg-[#232529] border border-[#696e79] p-2 h-auto w-full m-auto sm:hidden">
                <input
                    type="text"
                    placeholder="Search..."
                    className={`px-3 py-2 w-full dark:text-white border border-[#696e79]  focus:outline-none `}
                    onBlur={''}
                    autoFocus
                />
                <div className='bg-[#448460]'>
                    <button
                        onClick={''}
                        className="right-2 top-2 p-2 text-gray-600 focus:outline-none"
                    >
                        <FaSearch size={20} />
                    </button>
                </div>
                </div>
                <ul className="sm:hidden bg-[#f7f4f3] dark:bg-[#232529] border-[#696e79] text-white py-4 flex-wrap top-0 right-0 w-full">
                <nav className="block items-center ml-4">
                    {headerlinks.map((link) => (
                    <Link key={link.id} href={link.href}>
                        <div className="group flex items-center rounded-md transition-shadow">
                        {link.icon}
                        <li className="block text-[#696e79] ml-4 hover:text-[#e3796a]">
                            {link.text}
                        </li>
                        </div>
                    </Link>
                    ))}
                </nav>
                </ul>
                <div className='block bg-[#f7f4f3] dark:bg-[#232529] items-center sm:hidden'>
                    <div className='flex w-full py-4 border-b border-t border-[#35383f] justify-start space-x-3 hover:cursor-pointer'>
                        <div className='text-[#696e79] ml-4'>
                        <DarkModeSwitch />
                        </div>
                        <div className='text-[#696e79] hover:text-[#e3796a]'>
                        Light Theme
                        </div>
                    </div>
                    <div className='flex w-full py-4 justify-start space-x-5'>
                        <div className='text-[#696e79] ml-4'>
                            Share
                        </div>
                        <div>
                            <FaTwitter className='h-6 w-6 text-[#71baf2]' />
                        </div>
                        <div>
                            <FaFacebook className='h-6 w-6 text-[#1773ea]' />
                        </div>
                    </div>
                </div>
                </div>
            </div>                            
        </div>
    </div>
  )
}

export default Header