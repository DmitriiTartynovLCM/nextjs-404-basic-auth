import React from 'react'
import App from 'next/app'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// MyApp.getInitialProps = async (ctx) => {
//   return App.getInitialProps(ctx)
// }
