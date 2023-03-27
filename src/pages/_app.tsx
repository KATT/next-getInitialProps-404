import type { AppType } from 'next/app';


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async () => {
 return {
    pageProps: {},
 } 
}
export default MyApp;
