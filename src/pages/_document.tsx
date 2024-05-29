import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' sizes='192x192' href='/favicon.png'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
