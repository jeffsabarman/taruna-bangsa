import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { atom } from 'jotai'
import theme from '@/styles/theme'
import ElevationAppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
export const newsEventsAtom = atom<
  {
    _id: string
    mainImageUrl: string
    title: string
    description: string
    mainImageCaption: string
    // bodySnippet: any;
    publishedAt: string
    slug: {
      current: string
    }
  }[]
>([])

export const counterPageAtom = atom<number>(1)

export const dataCountAtom = atom<number>(0)

export default function MyApp(props: any) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ElevationAppBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
