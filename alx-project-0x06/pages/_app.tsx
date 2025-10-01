
// import Layout from "@/components/layouts/Layout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { CountProvider } from "@/context/CountContext";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <CountProvider>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </CountProvider>
//   )
// }

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '.././store/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

