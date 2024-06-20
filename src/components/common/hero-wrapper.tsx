import React from 'react'
// import { useTranslation } from 'react-i18next'
import TypeWriter from './typewriter'

interface HeroProps {
  title: string
  url?: string
}
const HeroWrapper: React.FC<HeroProps> = ({ url }) => {
  // const { t } = useTranslation()
  return (
    <div
      className='hero h-48 w-screen bg-secondary md:h-96'
      style={{
        backgroundImage: url ? `url(${url})` : ''
      }}
    >
      <div className='hero-content h-full w-full p-0 text-center'>
        {url ? (
          <div className='max-w-720 hero-content h-full w-full object-contain text-center'></div>
        ) : (
          <>
            {/* <h1 className='text-6xl font-bold uppercase text-primary'>
                {t(`${title}`)}
              </h1> */}
            <TypeWriter />
          </>
        )}
      </div>
    </div>
  )
}
export default HeroWrapper
