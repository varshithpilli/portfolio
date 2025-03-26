import React from 'react'

const About: React.FC = () => {
  return (
    <div id='about' className='pt-24 w-11/12 mx-auto flex flex-col justify-center items-center  mb-20'>
      <h2 className='text-center text-[40px] font-ct font-semibold mb-10'>About</h2>
      
      <div className='font-mw flex flex-col justify-center items-center md:max-w-3xl gap-12 leading-7'>
          <div className='text-md'>
            <p>I&apos;m a tech enthusiast who loves diving deep into systems and understanding how things work at a low level. I started my journey exploring low-level programming, working with languages like C and C++, understanding memory management, and tinkering with operating systems, pushing me to experiment with assembly.</p>
          </div>
          <div className='text-md'>
            <p>More recently, I&apos;ve started exploring web development and machine learning, broadening my perspective beyond low-level systems. I&apos;m learning how to build for the web, working with modern frameworks, and understanding backend architectures. On the ML side, I&apos;m getting familiar with data processing, basic models, and the tools that power AI. While low-level programming still excites me, I&apos;m always keeping an open mind and experimenting, seeing where it takes me.</p>
        </div>
      </div>
    </div>
  )
}

export default About
