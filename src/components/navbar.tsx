import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { CiViewBoard } from 'react-icons/ci'
import { CiPen } from 'react-icons/ci'
import { CiCamera } from 'react-icons/ci'
import { CiSun } from 'react-icons/ci'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div className='navbar bg-primary text-primary-content'>
        <div className='flex-1 navbar-start'>
          <a className='btn btn-ghost text-xl'>Jiaoll</a>
        </div>
        <div className='hidden lg:flex navbar-center'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='https://jiaoll.com/'>Home</a>
            </li>
            <li>
              <a href='https://jiaoll.com/projects'>Projects</a>
            </li>
            <li>
              <Link href='/'>Blogs</Link>
            </li>
            <li>
              <a href='https://jiaoll.com/photos/all'>Photos</a>
            </li>
            <li>
              <a href='https://jiaoll.com/about'>About</a>
            </li>
          </ul>
        </div>
        <div className='navbar-end lg:hidden'>
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost '
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='0'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content z-[1] p-2 shadow bg-primary text-white w-40 mt-2 absolute right-0`}
              >
                <li>
                  <a href='https://jiaoll.com/home'>
                    <IoHomeOutline />
                    Home
                  </a>
                </li>
                <li>
                  <a href='https://jiaoll.com/projects'>
                    <CiViewBoard />
                    Projects
                  </a>
                </li>
                <li>
                  <Link href='https://jiaoll.com/'>
                    <CiPen />
                    Blogs
                  </Link>
                </li>
                <li>
                  <a href='https://jiaoll.com/photos'>
                    <CiCamera />
                    Photos
                  </a>
                </li>
                <li>
                  <a href='https://jiaoll.com/about'>
                    <CiSun />
                    About
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
