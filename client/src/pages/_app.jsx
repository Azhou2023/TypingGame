import '@/styles/globals.css'
import '../components/navbar-component/navbar.jsx'

export default function App({ Component, pageProps }) {
  return (
    <div>
        <Navbar/>
        <Component {...pageProps} />
    </div>
  )
}
