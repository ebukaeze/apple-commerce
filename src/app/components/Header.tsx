import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full h-14 flex items-center justify-around fixed top-0 left-0 z-20 border-none border-gray-600 bg-gradient-to-b from-zinc-800 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:fixed lg:w-full glassMorphism lg:rounded-none lg:bg-gray-700 lg:p-2 lg:dark:bg-zinc-800/30'>
        <nav className='w-full flex px-4 items-center justify-around text-zinc-200'>
            <div className='flex items center'>
            <Link href={'/'}>
              <Image
              src={'/apple2.png'} alt='apple' width={18} height={18}
              className='object-contain invert'/>
            </Link>
            </div>
            <div className='items-center flex justify-center '>
                <ul className='flex items-center px-2'>
                <li><a href='/' className='headerLink'>Product</a></li>
                <li><a href='/' className='headerLink'>Explore</a></li>
                <li><a href='/' className='headerLink'>Support</a></li>
                <li><a href='/' className='headerLink'>Businesses</a></li>
                </ul>
            </div>
            <div className='flex items-center justify-between gap-x-2 mx-4 px-3'>
              <p className='px-3'>icon</p>
              <p className='px-3'>icon</p>
              <p className='px-3'>icon</p>

            </div>
        </nav>

    </header>
  )
}

export default Header