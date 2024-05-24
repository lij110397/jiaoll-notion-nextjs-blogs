import React from 'react'

interface HeroProps {
  title: string
  url?: string
  // metadata?: {
  //   title: string
  //   date: string
  //   tags: string[]
  //   cover: string
  // }
}
const HeroWrapper: React.FC<HeroProps> = ({ title, url }) => {
  return (
    <div
      className='hero h-96 w-screen bg-secondary'
      style={{
        backgroundImage: `url(${url})`,
      }}
      data-testid="hero"
    >
      <div className='hero-content h-full w-full p-0 text-center'>
        {url ? (
          <div className='hero-content h-full w-full text-center object-contain max-w-720'>
            {/* <div className='rounded-2xl p-5 flex flex-col gap-0'>
              <h1 className='text-5xl font-bold uppercase text-primary-content mb-10'>
                {title}
              </h1>
              <div className='flex flex-col justify-center gap-5 items-center text-primary-content'>
                <div>Last Edited Time: {metadata && metadata.date}</div>
                <div className='flex flex-row gap-5'>
                  {metadata &&
                    metadata.tags &&
                    metadata.tags.map((tag, i) => (
                      <div key={i} className='badge badge-outline bg-white text-primary'>
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div> */}
          </div>
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
