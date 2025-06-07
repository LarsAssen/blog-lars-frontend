import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import React from "react";

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
