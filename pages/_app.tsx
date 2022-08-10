import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NEXT_PUBLIC_ENV } from '$config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Seo from '$components/Seo/Seo';
import { Global } from '@emotion/react';
import { GlobalStyle } from '$styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          retry: false,
          suspense: true,
          useErrorBoundary: true,
        },
      },
    }),
  );
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={GlobalStyle} />
        <Seo />
        <Component {...pageProps} />
      </Hydrate>
      {NEXT_PUBLIC_ENV === 'local' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </QueryClientProvider>
  );
}

export default MyApp;
