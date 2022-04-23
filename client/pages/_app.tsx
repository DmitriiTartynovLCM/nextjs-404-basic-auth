import React from 'react'
import App, { AppContext, AppInitialProps } from 'next/app'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

async function appGetInitialProps ({
  Component,
  ctx
}: AppContext): Promise<AppInitialProps> {
  const pageProps = await loadGetInitialProps(Component, ctx)
  return { pageProps }
}

export default class MyClassApp extends App {
  static getInitialProps = appGetInitialProps

  render () {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}
