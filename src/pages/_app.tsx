import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../styles/global.scss';
import { Header } from '@/components/Header';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
