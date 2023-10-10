import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Banner = () => {
  return (
    <section className='w-full flex  max-w-[1229px] m-auto items-center h-[calc(100vh-58px)]
      space-y-8 gap-y-8'>
        <div className='w-full flex flex-col items-center justify-start space-y-9 gap-y-8 sticky top-0'>
        <div className="w-[100%] flex flex-col px-8 place-items-start before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <h1 className='text-[58px] text-black font-[900] '> Empower your Vision </h1>
            <span className='text-[24px] text-black font-[600]'>with the New iphone 15 pro</span>
        </div>
        <div className='flex gap-x-4 w-[100%] px-8'>
         <Button 
         title='Be Pro'
         width='w-[95px]'
         onClick={() => {}}
         padding='px-4'
         bg='bg-black'
         color='text-white'
         weight='font-[700]'
         ></Button>

<Button 
         title='Explore Our Shop'
         width='w-content'
         onClick={() => {}}
         padding='px-4'
         bg=''
         color='text-black'
         weight='font-[500]'
         ></Button>
        </div>
        </div>
        <div className="flex relative h-[550px] w-[550px] sm:w-[450px] transition-all duration-100 
          md:line lg:h-650px lg:w-650px md:block mt-8 md:mt-0
          place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image 
            src="/iphone3.png"
            alt='iphone 14 pro max'
            className='object-contain relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' fill/>
         </div>
    </section>
  )
}

export default Banner