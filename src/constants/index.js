import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'
import { CiViewBoard, CiPen, CiCamera, CiSun } from 'react-icons/ci'

export const navLinks = [
  {
    href: 'https://jiaoll.com/',
    icon: <IoHomeOutline />,
    label: 'HOME',
    isNextLink: false
  },
  {
    href: 'https://jiaoll.com/projects',
    icon: <CiViewBoard />,
    label: 'PROJECTS',
    isNextLink: false
  },
  {
    href: '/',
    icon: <CiPen />,
    label: 'BLOGS',
    isNextLink: true
  },
  {
    href: 'https://jiaoll.com/photos',
    icon: <CiCamera />,
    label: 'PHOTOS',
    isNextLink: false
  },
  {
    href: 'https://jiaoll.com/about',
    icon: <CiSun />,
    label: 'ABOUT',
    isNextLink: false
  }
]
