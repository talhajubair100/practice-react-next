import '@/styles/globals.css'
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  let Layout = Component.layout || Fragment
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
