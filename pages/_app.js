// import '../styles/globals.css'
import '../styles/index.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
        
    )
}
export default MyApp
