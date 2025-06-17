import React from 'react'
import Logo from "../assets/logo.png"
import { CiMenuBurger } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa"
import { motion } from 'framer-motion'

const NavBarMenu = [
    {
        id:1,
        title:"Главная",
        link:"#",
    },
    {
        id:2,
        title:"Меню",
        link:"#",
    },
    {
        id:3,
        title:"Блог",
        link:"#",
    },
    {
        id:4,
        title:"О нас",
        link:"#",
    },
    {
        id:5,
        title:"Контакты",
        link:"#",
    },
]

const Navbar = () => {
  return (
    <div className='text-brown py-8'>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:0.5}}
        className="container flex justify-between items-center">
            {/* {logo menu} */}
        <div>
            <img src={Logo} alt="" className='max-w-[100px]' />
        </div>
            {/* {Menu section} */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4 relative z-40'>
                        {NavBarMenu.map((item) => (
                            <li>
                                <a href={item.link} 
                                className='inline-block text-base font-semibold py-2 px-3 uppercase'>
                                {item.title}
                                </a>
                            </li>
                        ) )}
                        <button className="text-xl ps-14">
                            <FaRegUser />
                        </button>
                    </ul>
                </div>
            {/* {Hamburger Icon} */}
            <div className='md:hidden'>
                <CiMenuBurger className='text-4xl'/>
            </div>
        </motion.div>
    </div>
  )
}

export default Navbar
