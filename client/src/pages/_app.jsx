import '@/styles/globals.css'
import Navbar from '../components/navbar-component/navbar.jsx'

export default function App({ Component, pageProps }) {
  return (
    <div>
        {/* <Navbar/> */}
        <Component {...pageProps} />
    </div>
  )
}
