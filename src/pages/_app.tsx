import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Footer from '@/components/footer'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import '@/styles/nprogress.css'
import Header from '@/components/header'
import TransitionEffect from '@/components/transition-effect'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // 在应用加载时将 router 对象挂载到 window 对象上
    if (typeof window !== 'undefined') {(
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
    document.documentElement.setAttribute('data-theme', 'mytheme');
    localStorage.setItem('theme', 'mytheme');
  }, [])

  return (
    <>
      <main className='bg-base-100'>
      <TransitionEffect>
        <Header
          pageTitle='BLOG'
          url={pageProps.metadata ? pageProps.metadata.cover : null}
        />

          <div className='min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-18rem)] mt-20'>
            <Component {...pageProps} />
          </div>
        </TransitionEffect>
        <Footer />
      </main>
    </>
  )
}

export default App
