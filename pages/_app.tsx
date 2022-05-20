import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("PageProps: ", pageProps);

  if (pageProps.hideLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <h1>Should show layout</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
