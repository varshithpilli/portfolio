import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer: React.FC = () => {
    return (
        <div className='flex flex-col gap-3 xl:mt-10 bg-[#F8FAFC] dark:bg-[#09090a]'>
            <ul className='flex flex-col sm:flex-row  items-center justify-center sm:justify-items-start sm:pl-3 gap-4  text-gray-700 dark:text-gray-300 mt-10 mb-5 font-ct text-xl'>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#home">Home</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#about">About</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#skills">Skills</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#projects">Projects</a></li>
                <li><a className='hover:text-black duration-100 dark:hover:text-white' href="#contact">Contact</a></li>
                <li><Link className='hover:text-black duration-100 dark:hover:text-white' href="https://varshithpilli.github.io/files/" target="_blank">Assignments</Link></li>
            </ul>
            <div className='flex items-center justify-center gap-10 pt-2 mb-5'>
                <a href="https://github.com/varshithpilli" target='_blank'><Image src = {assets.git_black} alt='' className='w-10 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="https://linkedin.com/in/varshith-pilli" target='_blank'><Image src={assets.linkedin} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="https://x.com/thesixthdude" target='_blank'><Image src={assets.x_black} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
                <a href="mailto:newbeginningspart01@gmail.com"><Image src={assets.mail_black} alt='' className='w-7 hover:scale-110 transition duration-200 dark:invert' /></a>
            </div>
            <a href="#home" className='w-fit mx-auto'><Image src={assets.favi} alt='' className='h-16 w-16 mx-auto'/></a>
            <p className='text-center font-ct text-xl mb-10'>by Var</p>
        </div>
    )
}

export default Footer
