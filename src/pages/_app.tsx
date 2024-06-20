import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Footer from '@/components/common/footer'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import '@/styles/nprogress.css'
import Header from '@/components/common/header'
import TransitionEffect from '@/components/common/transition-effect'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // 在应用加载时将 router 对象挂载到 window 对象上
    if (typeof window !== 'undefined') {
      ;(
        window as Window & typeof globalThis & { router: typeof router }
      ).router = router
    }
  }, [])

  useEffect(() => {
    const handleStart = () => {
      // console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    // const theme = localStorage.getItem('mytheme') || 'sunset';
    // console.log('initial theme: ', theme);
    document.documentElement.setAttribute('data-theme', 'mytheme')
    localStorage.setItem('theme', 'mytheme')
  }, [])

  return (
    <>
      <main className='bg-base'>
        <TransitionEffect>
          <Header
            pageTitle='HERO_TITLE'
            url={pageProps.metadata ? pageProps.metadata.cover : null}
          />

          <div className='mt-20 min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-18rem)]'>
            <Component {...pageProps} />
          </div>
        </TransitionEffect>
        <Footer />
      </main>
    </>
  )
}

export default App
