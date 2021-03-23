import type { AppProps } from 'next/app'

import AppLayout from '@components/AppLayout'

import { ContextUserProvider } from 'context/contextUser'

import 'reset-css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ContextUserProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ContextUserProvider>
    </>
  )
}

export default App
