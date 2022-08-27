import '../styles/css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />;
  </Layout>
}

export default MyApp
