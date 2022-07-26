import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from '@/context/GlobalContext'
import { GlobalStyle, ToastStyledContainer, lightTheme, darkTheme } from '@/styles/globalStyles'

function MyApp({ Component, pageProps, token }) {
  const [theme, setTheme] = useState()

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="NextJS Template developed by Lucas Koval" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <GlobalProvider themeStyle={theme} setThemeStyle={setTheme}>
        <NextNprogress />
        <Component {...pageProps} />
      </GlobalProvider>
      <ToastStyledContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </ThemeProvider>
  )
}

export default MyApp

MyApp.getStaticProps = async function ({ Component, ctx }) {
  const token = process.env.TOKEN || ''
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = Component.getStaticProps(ctx)
  }
  return { pageProps, token }
}
