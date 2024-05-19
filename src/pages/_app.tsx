import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>jiaoll blogs</title>
        <meta name="description" content="Jiaoll's personal blogs system including sense and sensitivity blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-theme="mytheme">
        <Component {...pageProps} />
      </main>
    </>
  );
}
