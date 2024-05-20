import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-day dark:bg-night'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
