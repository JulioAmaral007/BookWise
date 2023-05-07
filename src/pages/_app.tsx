import { globalStyles } from '@/styles/globals'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import Head from 'next/head'

export const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <Head>
            <title>BookWise</title>
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </>
  )
}
