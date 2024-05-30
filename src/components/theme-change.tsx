// a component to change themes of the blog system
// there are only two themes at the moment, mytheme and dark
import React, { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeChange = () => {
  const [theme, setTheme] = useState('mytheme')

  useEffect(() => {
    themeChange(false)
  }, [])

  function changeTheme(e: React.ChangeEvent<HTMLInputElement>) {
    const theme = e.target.dataset.setTheme
    setTheme(theme === 'mytheme' ? 'sunset' : 'mytheme')
  }

  return (
    <label className='flex cursor-pointer gap-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>
      <input
        type='checkbox'
        value={theme}
        className='toggle theme-controller'
        onChange={changeTheme}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
    </label>
  )
}

export default ThemeChange
