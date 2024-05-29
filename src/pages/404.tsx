import React from 'react'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='text-2xl text-red-600'>404 - Page Not Found</h1>
      <p className='text-gray-700'>The page you are asking is on the way!</p>
      <button className='mt-5 px-5 py-2 bg-primary text-white rounded-md uppercase'>
        <Link href='/'>
          Back to Home page
        </Link>
      </button>
    </div>
  )
}

export default Custom404;