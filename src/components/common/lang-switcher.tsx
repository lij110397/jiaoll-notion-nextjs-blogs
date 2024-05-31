// component to switch the language of the website
import React, { useEffect } from 'react'
import { IoLanguage } from 'react-icons/io5'
import i18n from '@/lib/i18n'
// import { useRouter } from 'next/router'

const LangSwitcher = () => {
  // const router = useRouter()
  // get user default language setting
  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    const userLang = savedLang || navigator.language || navigator.languages[0]
    if (userLang.includes('zh')) {
      i18n.changeLanguage('zh')
      localStorage.setItem('language', 'zh')
    } else {
      i18n.changeLanguage('en')
      localStorage.setItem('language', 'en')
    }
  }, [])

  const changeLanguage = (language: string) => {
    console.log(language)
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    console.log('i18n:', i18n.language)
  }

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} className='btn btn-ghost m-1' role='button'>
        <IoLanguage />
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-[1] flex w-auto items-center justify-center rounded-lg bg-base-100 px-5 text-primary shadow'
      >
        <li onClick={() => changeLanguage('en')}>
          <a>English</a>
        </li>
        <li onClick={() => changeLanguage('zh')}>
          <a>Chinese</a>
        </li>
      </ul>
    </div>
  )
}

export default LangSwitcher
