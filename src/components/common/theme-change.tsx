// a component to change themes of the blog system
// there are only two themes at the moment, mytheme and dark
import React, { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeChange = () => {
  const [theme, setTheme] = useState('mytheme')

  useEffect(() => {
    themeChange(false)
  }, [])

  // when clicked change the theme of the project
  function changeTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    // console.log('currentTheme: ', currentTheme);

    // 根据当前主题来切换到新的主题
    const newTheme = currentTheme === 'mytheme' ? 'sunset' : 'mytheme'
    // console.log('newTheme: ', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)

    // 存储新主题到localStorage
    localStorage.setItem('theme', newTheme)
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
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
      <input
        type='checkbox'
        value={theme}
        className='theme-controller toggle'
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
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>
    </label>
  )
}

export default ThemeChange
