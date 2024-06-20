import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'
import ThemeChange from '@/components/common/theme-change'
import LangSwitcher from '@/components/common/lang-switcher'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useTranslation()
  // console.log(navLinks)
  return (
    <>
      <div className='navbar bg-primary text-primary-content'>
        <div className='navbar-start flex-1'>
          <a className='btn btn-ghost text-xl'>Jiaoll</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
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
              className='btn btn-ghost'
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
                className={`menu dropdown-content menu-sm absolute right-0 z-[1] mt-2 w-40 bg-primary p-2 text-white shadow transition-all duration-700 ease-in-out`}
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
