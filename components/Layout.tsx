import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

