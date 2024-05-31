import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { CiViewBoard } from 'react-icons/ci'
import { CiPen } from 'react-icons/ci'
import { CiCamera } from 'react-icons/ci'
import { CiSun } from 'react-icons/ci'
import ThemeChange from '@/components/theme-change'
import LangSwitcher from '@/components/lang-switcher'
import { useTranslation } from 'react-i18next'
export const navLinks = [
  { href: 'https://jiaoll.com/', icon: <IoHomeOutline />, label: 'HOME' },
  {
    href: 'https://jiaoll.com/projects',
    icon: <CiViewBoard />,
    label: 'PROJECTS',
  },
  {
    href: '/',
    icon: <CiPen />,
    label: 'BLOGS',
    isNextLink: true,
  },
  { href: 'https://jiaoll.com/photos', icon: <CiCamera />, label: 'PHOTOS' },
  { href: 'https://jiaoll.com/about', icon: <CiSun />, label: 'ABOUT' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className='navbar bg-primary text-primary-content'>
        <div className='flex-1 navbar-start'>
          <a className='btn btn-ghost text-xl'>Jiaoll</a>
        </div>
        <div className='hidden lg:flex navbar-center'>
          <ThemeChange />
          <LangSwitcher />
          <ul className='menu menu-horizontal px-1'>
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isNextLink ? (
                  <Link href={link.href}>{t(`NAVIGATION.${link.label}`)}</Link>
                ) : (
                  <a href={link.href}>{t(`NAVIGATION.${link.label}`)}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end lg:hidden'>
          <ThemeChange />
          <LangSwitcher />
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
                className={`menu menu-sm dropdown-content z-[1] p-2 shadow bg-primary text-white w-40 mt-2 absolute right-0  transition-all duration-700 ease-in-out`}
              >
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.isNextLink ? (
                      <Link href={link.href}>
                        {link.icon}
                        {t(`NAVIGATION.${link.label}`)}
                      </Link>
                    ) : (
                      <a href={link.href}>
                        {link.icon}
                        {t(`NAVIGATION.${link.label}`)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
