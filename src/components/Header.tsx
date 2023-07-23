import Image from 'next/image'
import React, { useState } from 'react'
import { MenuIcon, NapaIcon, SearchIcon, WalletIcon } from './assets'

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isOpen, "isopen")
  return (
    <div>
      <div className='bg-black flex justify-between py-3 px-10  items-center text-center'>
        <div onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={MenuIcon}
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            src={NapaIcon}
            width={100}
            height={80}
            alt="Picture of the author"
          />
        </div>
        <div className='flex items-center justify-between text-center'>
          <div className='pr-5'>
            <Image
              src={SearchIcon}
              width={25}
              height={23}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src={WalletIcon}
              width={25}
              height={25}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className={`z-50 bg-red-600 transition-all duration-[8000ms]  ${isOpen ? ' w-screen h-[87vh]' : 'w-[0.3px] h-[87vh]'}`}></div>
    </div>
  )
}

export default Header