import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Skills: React.FC = () => {
  return (
    <div id='skills' className='min-h-screen w-11/12 pt-24 mx-auto'>

      <h2 className='text-center text-[40px] font-ct font-semibold mb-12'>Skills</h2>

      <div className="w-[95%] md:w-auto mx-auto flex flex-col md:flex-row gap-10 flex-wrap">

        <div className="w-90 mx-auto md:w-120 px-8 py-4 rounded-xl border border-gray-200 dark:border-black hover:-translate-y-2 transition duration-250 shadow-md bg-[#f6f6f6] dark:bg-[#202020]">
          <h3 className='text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 font-mw'>Languages</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.python} alt=''  className='w-9'/>
              <p>Python</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center px-3 bg-white gap-1 border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.c} alt=''  className='w-6'/>
              <p>C</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center px-3 bg-white gap-1 border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.cpp} alt=''  className='w-6'/>
              <p>C++</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-1 pr-2 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.java} alt=''  className='w-9'/>
              <p>Java</p>
            </div>
          </div>
        </div>

        <div className="w-90 mx-auto md:w-120 px-8 py-4 border border-gray-200 dark:border-black hover:-translate-y-2 transition duration-250 shadow-md rounded-xl bg-[#f6f6f6] dark:bg-[#202020]">
          <h3 className='text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 font-mw'>Frontend</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.html} alt=''  className='w-7'/>
              <p>Html</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.css} alt=''  className='w-7'/>
              <p>CSS</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.js} alt=''  className='w-8'/>
              <p>JavaScript</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.ts} alt=''  className='w-8'/>
              <p>TypeScript</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.tailwind} alt=''  className='w-8'/>
              <p>TailwindCSS</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.react} alt=''  className='w-6'/>
              <p>ReactJS</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center gap-1 pl-2 pr-4 py-2 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.next} alt=''  className='w-6 dark:invert'/>
              <p>NextJS</p>
            </div>
          </div>
        </div>

        
        <div className="w-90 mx-auto md:w-120 px-8 py-4 h-auto rounded-xl border border-gray-200 dark:border-black hover:-translate-y-2 transition duration-250 shadow-md bg-[#f6f6f6] dark:bg-[#202020]">
          <h3 className='text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 font-mw'>Tools</h3>
          <div className='flex flex-wrap justify-center gap-4 w-[90%] mx-auto'>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center gap-1 py-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.linux} alt=''  className='w-6'/>
              <p>Linux</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 gap-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.vscode} alt=''  className='w-6'/>
              <p>VS Code</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-1 gap-1 pl-1 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.git} alt=''  className='w-8'/>
              <p>Git</p>
            </div>
            <div className='hover:scale-110 dark:bg-darkBg dark:border-black dark:text-gray-200 cursor-pointer transition duration-200 flex justify-center items-center py-2 gap-1 pl-2 pr-4 bg-white border border-gray-300 w-fit rounded-xl'>
              <Image src={assets.github_mark} alt=''  className='w-6 dark:invert'/>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
