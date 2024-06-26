import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
