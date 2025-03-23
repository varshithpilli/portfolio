import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header: React.FC = () => {
    return (
        <div id='home' className='font-ct h-screen flex flex-col gap-6 items-center justify-center pt-5'>
            <div>
                <Image src={assets.profile_pic} alt='' className='w-36 rounded-full hover:scale-105 transition duration-250 border-2 border-gray-800 dark:border-gray-300' />
            </div>

            <div className='flex flex-col gap-2'>
                <h3 className='text-lg md:text-xl'>Hello! I&apos;m</h3>
                <h1 className='text-3xl md:text-5xl'>Varshith Pilli</h1>
            </div>

            <div>
                <h3 className='text-md md:text-xl px-7'>I&apos;m a Comp Sci tech enthusiast who loves tweaking everything to figure things out.</h3>
                <h3 className='text-md md:text-xl px-7'> I also enjoy building, exploring, and pushing the limits of technology!</h3>

            </div>

            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <a href="#contact" className='flex justify-center items-center gap-2 px-8 pt-1.5 pb-2 bg-black rounded-full text-white hover:scale-105 transition duration-200 dark:bg-[#FDFAF6] dark:text-black'>
                    <div>connect</div>
                    <Image src={assets.right_arrow_white} className='w-4 pt-0.5 dark:invert' alt='' />
                </a>
                <a href="/resume.pdf" download className='flex justify-center items-center gap-2 px-5 pt-1.5 pb-2 bg-black rounded-full text-white hover:scale-105 transition duration-200 dark:bg-[#FDFAF6] dark:text-black'>
                    <div>my resume</div>
                    <Image src={assets.download_icon} className='w-4 pt-0.5 dark:invert h-6.5 w-6' alt='' />
                </a>
            </div>
        </div>
    )
}

export default Header
