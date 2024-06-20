import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/logo.svg' />
        <link rel='icon' href='/logo.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' sizes='192x192' href='/logo.svg'></link>
        <title>Jiaoll | blogs</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
