import React from 'react'

interface HeroProps {
  title: string
  url?: string
}
const HeroWrapper: React.FC<HeroProps> = ({ title, url }) => {
  return (
    <div
      className='hero md:h-96 w-screen bg-secondary h-48'
      style={{
        backgroundImage: url?`url(${url})`:'',
      }}
    >
      <div className='hero-content h-full w-full p-0 text-center'>
        {url ? (
          <div className='hero-content h-full w-full text-center object-contain max-w-720'></div>
        ) : (
          <>
            <div className='max-w-md'>
              <h1 className='text-6xl font-bold uppercase text-primary'>
                {title}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default HeroWrapper
