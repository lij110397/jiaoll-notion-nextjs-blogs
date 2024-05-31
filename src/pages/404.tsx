import React from 'react'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl text-red-600'>404 - Page Not Found</h1>
      <p className='text-gray-700'>The page you are asking is on the way!</p>
      <button className='mt-5 rounded-md bg-primary px-5 py-2 uppercase text-white'>
        <Link href='/'>Back to Home page</Link>
      </button>
    </div>
  )
}

export default Custom404
