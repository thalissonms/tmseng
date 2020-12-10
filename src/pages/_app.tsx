import React from 'react'
import { AppProps } from 'next/app' 

import '../assets/sass/app-exports.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
